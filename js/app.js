/**
 * Main Application Logic - Python Tinker Academy
 */

document.addEventListener('DOMContentLoaded', () => {
  // Safe LocalStorage Wrapper (Prevents DOMException crash on file:// protocol)
  function safeGetStorage(key, fallback) {
    try {
      const val = localStorage.getItem(key);
      return val ? JSON.parse(val) : fallback;
    } catch (e) {
      console.warn('LocalStorage not accessible:', e);
      return fallback;
    }
  }

  function safeSetStorage(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {
      console.warn('LocalStorage write blocked:', e);
    }
  }

  // Clear stale saved code if curriculum version changed
  const CURRENT_CURRICULUM_VERSION = 'v20261026_5';
  if (safeGetStorage('pta_curriculum_version', '') !== CURRENT_CURRICULUM_VERSION) {
    try {
      localStorage.removeItem('pta_saved_code');
      safeSetStorage('pta_curriculum_version', CURRENT_CURRICULUM_VERSION);
    } catch (e) {
      console.warn('LocalStorage clear failed:', e);
    }
  }

  // --- STATE MANAGEMENT ---
  let state = {
    completedDays: safeGetStorage('pta_completed_days', []),
    savedCode: safeGetStorage('pta_saved_code', {}),
    activeDay: 1,
    activePhase: 'concept', // 'concept', 'liveCode', 'tinker'
    timer: {
      secondsLeft: 600, // Default 10 minutes
      phase: 'concept',
      intervalId: null,
      isRunning: false
    }
  };

  // --- INITIALIZE SKULPT RUNNER ---
  let runner = null;
  if (typeof PythonRunner !== 'undefined') {
    runner = new PythonRunner({
      terminalEl: document.getElementById('terminal-window'),
      canvasEl: document.getElementById('turtle-canvas'),
      inputPromptCallback: (promptText, callback) => {
        const userVal = window.prompt(promptText || 'Python input required:') || '';
        callback(userVal);
      }
    });
  }

  // --- DOM ELEMENTS ---
  const roadmapGrid = document.getElementById('roadmap-grid');
  const progressBarFill = document.getElementById('progress-bar-fill');
  const progressText = document.getElementById('progress-text');
  const dayViewOverlay = document.getElementById('day-view-overlay');
  const leftPanel = document.getElementById('workspace-left-panel');
  const codeTextarea = document.getElementById('code-textarea');
  const viewDayTitle = document.getElementById('view-day-title');
  const viewDayFocus = document.getElementById('view-day-focus');
  const btnRunCode = document.getElementById('btn-run-code');
  const btnResetCode = document.getElementById('btn-reset-code');
  const btnMarkCompleted = document.getElementById('btn-mark-completed');

  // --- RENDER ROADMAP CARDS ---
  function renderRoadmap() {
    if (!roadmapGrid) return;

    // Robust Event Delegation on Roadmap Grid
    if (!roadmapGrid.dataset.boundDelegation) {
      roadmapGrid.dataset.boundDelegation = 'true';
      roadmapGrid.addEventListener('click', (e) => {
        // Allow standalone link button to navigate normally
        if (e.target.closest('.standalone-link-btn')) {
          return;
        }
        const card = e.target.closest('.day-card');
        if (card) {
          const dayNum = parseInt(card.dataset.day || card.getAttribute('data-day'), 10);
          if (dayNum) {
            e.preventDefault();
            e.stopPropagation();
            openDayWorkspace(dayNum);
          }
        }
      });
    }

    const existingCards = roadmapGrid.querySelectorAll('.day-card');
    if (existingCards.length > 0) {
      existingCards.forEach((card) => {
        const dayNum = parseInt(card.dataset.day, 10);
        const isCompleted = state.completedDays.includes(dayNum);
        card.classList.toggle('completed', isCompleted);
      });
      updateProgressBar();
      return;
    }

    // Dynamic fallback generation if cards are not pre-rendered
    if (typeof CURRICULUM === 'undefined') return;
    roadmapGrid.innerHTML = '';
    CURRICULUM.forEach((dayData) => {
      const isCompleted = state.completedDays.includes(dayData.day);
      
      const card = document.createElement('div');
      card.className = `day-card ${isCompleted ? 'completed' : ''}`;
      card.dataset.day = dayData.day;
      card.style.cursor = 'pointer';

      card.innerHTML = `
        <div class="day-card-header">
          <div class="day-number-badge">DAY ${dayData.day}</div>
          <div>
            <div class="day-card-title">${dayData.icon} ${dayData.title}</div>
            <div class="day-card-focus">${dayData.focus}</div>
          </div>
        </div>
        <p class="day-card-summary">${dayData.summary}</p>
        <div class="day-card-footer">
          <span class="day-time-pill">
            <i class="fa-regular fa-clock"></i> 45 mins
          </span>
          <div style="display: flex; gap: 0.5rem; align-items: center;">
            <a href="day${dayData.day}.html" class="standalone-link-btn" title="Open as Standalone Page" onclick="event.stopPropagation();" style="font-size: 0.78rem; padding: 0.25rem 0.6rem; background: rgba(56, 189, 248, 0.15); border: 1px solid var(--accent-cyan); border-radius: 6px; color: var(--accent-cyan); text-decoration: none; display: inline-flex; align-items: center; gap: 0.3rem;">
              Full Page <i class="fa-solid fa-up-right-from-square" style="font-size: 0.7rem;"></i>
            </a>
            <span class="day-action-text" style="color: var(--accent-green-glow); font-weight: 600; font-size: 0.85rem;">
              Start Lesson <i class="fa-solid fa-arrow-right"></i>
            </span>
          </div>
        </div>
      `;

      // Click card to open dynamic overlay
      card.addEventListener('click', () => {
        openDayWorkspace(dayData.day);
      });

      roadmapGrid.appendChild(card);
    });

    updateProgressBar();
  }

  // --- UPDATE PROGRESS BAR ---
  function updateProgressBar() {
    if (!progressBarFill || !progressText) return;
    const total = (typeof CURRICULUM !== 'undefined') ? CURRICULUM.length : 15;
    const count = state.completedDays.length;
    const pct = Math.round((count / total) * 100);
    progressBarFill.style.width = `${pct}%`;
    progressText.textContent = `${count} / ${total} Days Completed (${pct}%)`;
  }

  function getCurriculum() {
    return (typeof CURRICULUM !== 'undefined' && Array.isArray(CURRICULUM)) ? CURRICULUM : (window.CURRICULUM || []);
  }

  // --- OPEN DAY WORKSPACE ---
  function openDayWorkspace(dayNum) {
    // Show Overlay First so UI opens immediately
    if (dayViewOverlay) dayViewOverlay.classList.add('active');

    try {
      const curr = getCurriculum();
      if (!curr || curr.length === 0) return;
      state.activeDay = dayNum;
      state.activePhase = 'concept';
      const dayData = curr.find(d => d.day === dayNum) || curr[0];
      if (!dayData) return;

      if (viewDayTitle) viewDayTitle.textContent = `Day ${dayData.day}: ${dayData.title}`;
      if (viewDayFocus) viewDayFocus.textContent = `Focus Topic: ${dayData.focus}`;

      // Update mark completed button state
      if (btnMarkCompleted) {
        const isComp = state.completedDays.includes(dayNum);
        btnMarkCompleted.innerHTML = isComp
          ? '<i class="fa-solid fa-circle-check"></i> Completed'
          : '<i class="fa-regular fa-circle-check"></i> Mark Completed';
        btnMarkCompleted.style.opacity = isComp ? '0.7' : '1';
      }

      // Load saved or starter code
      const saved = state.savedCode[`day_${dayNum}`];
      if (codeTextarea) {
        codeTextarea.value = saved || dayData.tinkerPlayground.starterCode;
      }

      // Reset editor filename
      const fnEl = document.getElementById('editor-filename');
      if (fnEl) fnEl.textContent = `day${dayNum}_tinker.py`;

      // Switch phase tab
      switchPhaseTab('concept');

      // Update Mentor Drawer tips
      updateMentorDrawer(dayData);
    } catch (err) {
      console.error('Error opening day workspace:', err);
    }
  }

  // Expose globally
  window.openDayWorkspace = openDayWorkspace;

  // --- SWITCH PHASE TAB ---
  function switchPhaseTab(phase) {
    const curr = getCurriculum();
    if (!curr || curr.length === 0) return;
    state.activePhase = phase;
    const dayData = curr.find(d => d.day === state.activeDay) || curr[0];
    if (!dayData) return;

    // Update Tab UI
    document.querySelectorAll('.phase-tab').forEach(tab => {
      tab.classList.toggle('active', tab.dataset.phase === phase);
    });

    // Render Left Panel Content
    if (phase === 'concept') {
      renderConceptPhase(dayData);
      setTimerPhase('concept', 600); // 10 mins
    } else if (phase === 'liveCode') {
      renderLiveCodePhase(dayData);
      setTimerPhase('liveCode', 900); // 15 mins
    } else if (phase === 'tinker') {
      renderTinkerPhase(dayData);
      setTimerPhase('tinker', 1200); // 20 mins
    }
  }

  // --- RENDER CONCEPT PHASE ---
  function renderConceptPhase(dayData) {
    if (!leftPanel || !dayData) return;
    const c = dayData.concept;
    leftPanel.innerHTML = `
      <div class="concept-card">
        <h3>🧠 Concept Breakdown</h3>
        <p style="font-size: 1rem; font-weight: 600; margin-bottom: 0.85rem; color: var(--text-primary);">
          ${c.headline}
        </p>
        <div class="analogy-box">
          <strong>💡 Everyday Analogy:</strong><br>${c.explanation}
        </div>

        <h4 style="font-size: 0.88rem; color: var(--accent-cyan-glow); margin-bottom: 0.5rem;">Syntax Cheat Sheet:</h4>
        <pre class="code-snippet-pre">${escapeHtml(c.syntaxSnippet)}</pre>

        <h4 style="font-size: 0.88rem; color: var(--accent-cyan-glow); margin-bottom: 0.5rem;">Key Takeaways:</h4>
        <ul class="takeaways-list">
          ${c.keyTakeaways.map(t => `<li>${t}</li>`).join('')}
        </ul>

        <!-- Quick Quiz -->
        <div class="quiz-box">
          <div class="quiz-question">❓ Quick Check: ${c.quickQuiz.question}</div>
          <div class="quiz-options">
            ${c.quickQuiz.options.map((opt, idx) => `
              <button class="quiz-option-btn" data-idx="${idx}">${opt}</button>
            `).join('')}
          </div>
          <div class="quiz-feedback" id="quiz-feedback"></div>
        </div>
      </div>
    `;

    // Bind Quiz Option Click Handlers
    const quizBtns = leftPanel.querySelectorAll('.quiz-option-btn');
    const feedbackEl = leftPanel.querySelector('#quiz-feedback');

    quizBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const selectedIdx = parseInt(e.target.dataset.idx, 10);
        quizBtns.forEach(b => b.className = 'quiz-option-btn');
        if (selectedIdx === c.quickQuiz.correctIndex) {
          e.target.classList.add('correct');
          feedbackEl.style.color = 'var(--accent-green-glow)';
          feedbackEl.innerHTML = `✨ ${c.quickQuiz.explanation}`;
        } else {
          e.target.classList.add('wrong');
          feedbackEl.style.color = 'var(--accent-rose)';
          feedbackEl.innerHTML = `❌ Not quite! Give it another try or re-read the analogy above.`;
        }
      });
    });
  }

  // --- RENDER LIVE CODE PHASE ---
  function renderLiveCodePhase(dayData) {
    if (!leftPanel || !dayData) return;
    const lc = dayData.liveCode;
    leftPanel.innerHTML = `
      <div class="live-code-card">
        <h3>⚡ Live-Code Walkthrough (15 Mins)</h3>
        <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1rem;">
          ${lc.explanation}
        </p>

        <div style="display: flex; gap: 0.5rem; margin-bottom: 1.25rem;">
          <button class="btn-secondary" id="btn-load-live-code" style="font-size: 0.8rem; padding: 0.4rem 0.8rem;">
            <i class="fa-solid fa-file-code"></i> Copy Walkthrough Code to Editor
          </button>
        </div>

        <h4 style="font-size: 0.88rem; color: var(--accent-cyan-glow); margin-bottom: 0.75rem;">Step-by-Step Code Structure:</h4>
        <div class="takeaways-list">
          ${lc.steps.map(s => `
            <li style="margin-bottom: 0.75rem;">
              <strong>Line ${s.line} (${s.title}):</strong><br>
              <span style="color: var(--text-secondary); font-size: 0.85rem;">${s.desc}</span>
            </li>
          `).join('')}
        </div>

        <h4 style="font-size: 0.88rem; color: var(--accent-cyan-glow); margin-bottom: 0.5rem;">Full Walkthrough Script:</h4>
        <pre class="code-snippet-pre">${escapeHtml(lc.code)}</pre>
      </div>
    `;

    const loadBtn = document.getElementById('btn-load-live-code');
    if (loadBtn) {
      loadBtn.addEventListener('click', () => {
        if (codeTextarea) codeTextarea.value = lc.code;
        saveCurrentCode();
      });
    }
  }

  // --- RENDER TINKER PHASE ---
  function renderTinkerPhase(dayData) {
    if (!leftPanel || !dayData) return;
    const tp = dayData.tinkerPlayground;
    leftPanel.innerHTML = `
      <div class="concept-card">
        <h3>🛠️ Tinker & Break Lab (20 Mins)</h3>
        <p style="font-size: 0.92rem; color: var(--text-primary); margin-bottom: 1rem;">
          <strong>🎯 Goal:</strong> ${tp.goal}
        </p>

        <div style="display: flex; gap: 0.5rem; margin-bottom: 1.25rem;">
          <button class="btn-secondary" id="btn-load-starter" style="font-size: 0.8rem;">
            <i class="fa-solid fa-rotate-left"></i> Load Starter Code
          </button>
          <button class="btn-secondary" id="btn-load-solution" style="font-size: 0.8rem;">
            <i class="fa-solid fa-key"></i> View Solution Code
          </button>
        </div>

        <!-- Break Challenges -->
        <div class="break-challenges-container">
          <div class="break-challenges-title">
            🔥 3 Challenges to Break & Modify:
          </div>
          ${tp.breakChallenges.map((ch, idx) => `
            <div class="challenge-item">
              <h4>${ch.title}</h4>
              <p>${ch.task}</p>
              <button class="hint-btn" data-hint="${escapeHtml(ch.hint)}">💡 Need a hint?</button>
              <div class="hint-text" style="display: none; font-size: 0.8rem; color: var(--accent-gold); margin-top: 0.4rem;">
                Hint: ${ch.hint}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    const starterBtn = document.getElementById('btn-load-starter');
    if (starterBtn) {
      starterBtn.addEventListener('click', () => {
        if (codeTextarea) codeTextarea.value = tp.starterCode;
        saveCurrentCode();
      });
    }

    const solBtn = document.getElementById('btn-load-solution');
    if (solBtn) {
      solBtn.addEventListener('click', () => {
        if (codeTextarea) codeTextarea.value = tp.solutionCode;
        saveCurrentCode();
      });
    }

    // Hint buttons toggle
    leftPanel.querySelectorAll('.hint-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const hintEl = e.target.nextElementSibling;
        if (hintEl) {
          hintEl.style.display = hintEl.style.display === 'none' ? 'block' : 'none';
        }
      });
    });
  }

  // --- SAVE CURRENT CODE ---
  function saveCurrentCode() {
    if (!codeTextarea) return;
    state.savedCode[`day_${state.activeDay}`] = codeTextarea.value;
    safeSetStorage('pta_saved_code', state.savedCode);
  }

  if (codeTextarea) {
    codeTextarea.addEventListener('input', saveCurrentCode);
  }

  // --- RUN CODE HANDLER ---
  if (btnRunCode) {
    btnRunCode.addEventListener('click', async () => {
      if (!codeTextarea) return;
      const code = codeTextarea.value;
      if (!code) return;

      if (!runner && typeof PythonRunner !== 'undefined') {
        runner = new PythonRunner({
          terminalEl: document.getElementById('terminal-window'),
          canvasEl: document.getElementById('turtle-canvas'),
          inputPromptCallback: (promptText, callback) => {
            const userVal = window.prompt(promptText || 'Python input required:') || '';
            callback(userVal);
          }
        });
      }

      if (code.includes('import turtle') || code.includes('from turtle import')) {
        switchOutputTab('turtle');
      } else {
        switchOutputTab('terminal');
      }

      if (runner) {
        await runner.runCode(code);
      } else {
        console.error('PythonRunner engine could not be initialized!');
      }
    });
  }

  // Reset Code Button
  if (btnResetCode) {
    btnResetCode.addEventListener('click', () => {
      if (typeof CURRICULUM === 'undefined') return;
      const dayData = CURRICULUM.find(d => d.day === state.activeDay);
      if (dayData && codeTextarea) {
        codeTextarea.value = dayData.tinkerPlayground.starterCode;
        saveCurrentCode();
      }
    });
  }

  // --- OUTPUT TAB SWITCHING ---
  function switchOutputTab(target) {
    const termTab = document.getElementById('tab-output-term');
    const turtleTab = document.getElementById('tab-output-turtle');
    const termWindow = document.getElementById('terminal-window');
    const turtleContainer = document.getElementById('turtle-container');

    if (!termTab || !turtleTab) return;

    if (target === 'turtle') {
      termTab.classList.remove('active');
      turtleTab.classList.add('active');
      if (termWindow) termWindow.style.display = 'none';
      if (turtleContainer) turtleContainer.classList.add('active');
    } else {
      turtleTab.classList.remove('active');
      termTab.classList.add('active');
      if (turtleContainer) turtleContainer.classList.remove('active');
      if (termWindow) termWindow.style.display = 'block';
    }
  }

  const termTabBtn = document.getElementById('tab-output-term');
  if (termTabBtn) termTabBtn.addEventListener('click', () => switchOutputTab('terminal'));

  const turtleTabBtn = document.getElementById('tab-output-turtle');
  if (turtleTabBtn) turtleTabBtn.addEventListener('click', () => switchOutputTab('turtle'));

  // --- MARK COMPLETED HANDLER ---
  if (btnMarkCompleted) {
    btnMarkCompleted.addEventListener('click', () => {
      const day = state.activeDay;
      if (!state.completedDays.includes(day)) {
        state.completedDays.push(day);
      } else {
        state.completedDays = state.completedDays.filter(d => d !== day);
      }
      safeSetStorage('pta_completed_days', state.completedDays);
      renderRoadmap();
      openDayWorkspace(day);
    });
  }

  // Reset Progress Button
  const btnResetProg = document.getElementById('btn-reset-progress');
  if (btnResetProg) {
    btnResetProg.addEventListener('click', () => {
      if (confirm('Are you sure you want to reset all lesson progress?')) {
        state.completedDays = [];
        try { localStorage.removeItem('pta_completed_days'); } catch (e) {}
        renderRoadmap();
      }
    });
  }

  // Close Day Workspace View
  const btnCloseDayView = document.getElementById('btn-close-day-view');
  if (btnCloseDayView) {
    btnCloseDayView.addEventListener('click', () => {
      if (dayViewOverlay) dayViewOverlay.classList.remove('active');
      if (window.location.hash || window.location.search) {
        history.pushState('', document.title, window.location.pathname);
      }
    });
  }

  // --- URL ROUTING HANDLER ---
  function checkUrlRouting() {
    const searchParams = new URLSearchParams(window.location.search);
    const dayParam = searchParams.get('day');
    if (dayParam) {
      const dNum = parseInt(dayParam, 10);
      if (dNum >= 1 && dNum <= 15) {
        openDayWorkspace(dNum);
        return;
      }
    }

    const hash = window.location.hash;
    if (hash && hash.startsWith('#day')) {
      const dNum = parseInt(hash.replace('#day', ''), 10);
      if (dNum >= 1 && dNum <= 15) {
        openDayWorkspace(dNum);
        return;
      }
    }
  }

  window.addEventListener('hashchange', checkUrlRouting);
  window.addEventListener('popstate', checkUrlRouting);

  // Phase Tabs Click Event
  document.querySelectorAll('.phase-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      const btn = e.target.closest('.phase-tab') || e.currentTarget;
      if (btn && btn.dataset.phase) {
        switchPhaseTab(btn.dataset.phase);
      }
    });
  });

  // --- SESSION TIMER CONTROLS ---
  function setTimerPhase(phase, seconds) {
    state.timer.phase = phase;
    state.timer.secondsLeft = seconds;
    
    ['timer-phase-badge', 'overlay-timer-phase-badge'].forEach(id => {
      const badge = document.getElementById(id);
      if (badge) {
        badge.className = `timer-phase-badge phase-${phase}`;
        if (phase === 'concept') badge.textContent = '10m Concept';
        else if (phase === 'liveCode') badge.textContent = '15m Live';
        else if (phase === 'tinker') badge.textContent = '20m Tinker';
      }
    });

    updateTimerClockDisplay();
  }

  function updateTimerClockDisplay() {
    ['timer-clock', 'overlay-timer-clock'].forEach(id => {
      const clockEl = document.getElementById(id);
      if (clockEl) {
        const m = Math.floor(state.timer.secondsLeft / 60);
        const s = state.timer.secondsLeft % 60;
        clockEl.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
      }
    });
  }

  function handleTimerToggle() {
    if (state.timer.isRunning) {
      clearInterval(state.timer.intervalId);
      state.timer.isRunning = false;
      ['btn-timer-toggle', 'btn-overlay-timer-toggle'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.innerHTML = '<i class="fa-solid fa-play"></i>';
      });
    } else {
      state.timer.isRunning = true;
      ['btn-timer-toggle', 'btn-overlay-timer-toggle'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.innerHTML = '<i class="fa-solid fa-pause"></i>';
      });
      state.timer.intervalId = setInterval(() => {
        if (state.timer.secondsLeft > 0) {
          state.timer.secondsLeft--;
          updateTimerClockDisplay();
        } else {
          clearInterval(state.timer.intervalId);
          state.timer.isRunning = false;
          ['btn-timer-toggle', 'btn-overlay-timer-toggle'].forEach(id => {
            const btn = document.getElementById(id);
            if (btn) btn.innerHTML = '<i class="fa-solid fa-play"></i>';
          });
          alert(`⏰ Timer Phase Complete! Time to move to the next phase!`);
        }
      }, 1000);
    }
  }

  function handleTimerReset() {
    if (state.timer.isRunning) {
      clearInterval(state.timer.intervalId);
      state.timer.isRunning = false;
      ['btn-timer-toggle', 'btn-overlay-timer-toggle'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.innerHTML = '<i class="fa-solid fa-play"></i>';
      });
    }
    const sec = state.timer.phase === 'concept' ? 600 : state.timer.phase === 'liveCode' ? 900 : 1200;
    state.timer.secondsLeft = sec;
    updateTimerClockDisplay();
  }

  ['btn-timer-toggle', 'btn-overlay-timer-toggle'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', handleTimerToggle);
  });

  ['btn-timer-reset', 'btn-overlay-timer-reset'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', handleTimerReset);
  });

  // --- MENTOR DRAWER TOGGLE ---
  const mentorDrawer = document.getElementById('mentor-drawer');
  const btnCloseDrawer = document.getElementById('btn-close-drawer');

  function toggleMentorDrawer() {
    if (!mentorDrawer) return;
    const curr = getCurriculum();
    const activeData = curr.find(d => d.day === state.activeDay) || curr[0];
    if (activeData) updateMentorDrawer(activeData);
    mentorDrawer.classList.toggle('open');
  }

  ['btn-mentor-toggle', 'btn-overlay-mentor-toggle'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', toggleMentorDrawer);
  });

  if (btnCloseDrawer && mentorDrawer) {
    btnCloseDrawer.addEventListener('click', () => mentorDrawer.classList.remove('open'));
  }

  function updateMentorDrawer(dayData) {
    const container = document.getElementById('mentor-day-tips');
    if (!container || !dayData) return;
    container.innerHTML = `
      <div class="concept-card" style="margin-top: 1rem;">
        <h3>📌 Day ${dayData.day} Mentor Notes</h3>
        <h4 style="font-size: 0.85rem; color: var(--accent-rose); margin-bottom: 0.4rem;">Common Stumbling Blocks:</h4>
        <ul style="font-size: 0.82rem; color: var(--text-secondary); margin-left: 1rem; margin-bottom: 1rem;">
          ${dayData.mentorNotes.commonStumblingBlocks.map(sb => `<li>${sb}</li>`).join('')}
        </ul>
        <h4 style="font-size: 0.85rem; color: var(--accent-gold); margin-bottom: 0.4rem;">Prompting Questions:</h4>
        <ul style="font-size: 0.82rem; color: var(--text-secondary); margin-left: 1rem;">
          ${dayData.mentorNotes.tinkerQuestions.map(tq => `<li>"${tq}"</li>`).join('')}
        </ul>
      </div>
    `;
  }

  // --- CERTIFICATE MODAL ---
  const certModal = document.getElementById('certificate-modal');
  const btnCertModal = document.getElementById('btn-cert-modal');
  const btnCloseCert = document.getElementById('btn-close-cert');

  if (btnCertModal && certModal) {
    btnCertModal.addEventListener('click', () => certModal.classList.add('active'));
  }
  if (btnCloseCert && certModal) {
    btnCloseCert.addEventListener('click', () => certModal.classList.remove('active'));
  }

  // Utility Helper
  function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // --- METHODOLOGY GUIDE POPUP MODAL ---
  const methodData = {
    concept: {
      icon: '🧠',
      phase: '10 MINUTES • PHASE 1',
      title: '10 Min: Concept Phase (The Spark)',
      meaning: 'In this initial 10-minute phase, we ditch boring textbook definitions! Every Python topic starts with an everyday real-world analogy (e.g. comparing print() to a megaphone or variables to labeled snack boxes) that a 13-year-old instantly connects with.',
      steps: [
        'Open any Day card on the roadmap to view the <strong>Everyday Analogy</strong> and <strong>Syntax Cheat Sheet</strong> on the left panel.',
        'Answer the <strong>Quick Check Quiz</strong> at the bottom of the page to test your logic immediately.',
        'Start the <strong>Session Timer</strong> in the header (set for 10:00) to keep momentum focused and engaging.',
        'When you feel confident, click the <strong>2. Live Code (15m)</strong> tab at the top to move to the next phase.'
      ],
      tip: '<strong>💡 Student Pro Tip:</strong> Don\'t try to memorize exact code syntax! Focus on the "why" behind the everyday analogy. You can always check the Syntax Cheat Sheet whenever you write code.'
    },
    liveCode: {
      icon: '⚡',
      phase: '15 MINUTES • PHASE 2',
      title: '15 Min: Live-Code Together (The Guided Build)',
      meaning: 'You never code alone! In this 15-minute phase, students and mentors build the core project structure together line-by-line using a structured guided blueprint.',
      steps: [
        'Read through the <strong>Line-by-Line Blueprint</strong> on the left panel to understand how the code fits together.',
        'Click <strong>Load Guided Code into IDE</strong> to automatically populate the editor on the right pane.',
        'Press <strong>Run Code</strong> (▶) to execute the Python script live in the browser terminal.',
        'Verify that your output matches the target output before unlocking full tinkering freedom!'
      ],
      tip: '<strong>⚡ Live Coding Pro Tip:</strong> Type out a few lines manually instead of just copying! Your fingers learn muscle memory for colons, indents, and quotation marks.'
    },
    tinker: {
      icon: '🛠️',
      phase: '20 MINUTES • PHASE 3',
      title: '20 Min: Tinker & Break Lab (The Playground)',
      meaning: 'The real learning happens when you break things! In this final 20-minute phase, students get total creative freedom to modify values, change rules, introduce intentional bugs, and add custom features.',
      steps: [
        'Review the <strong>Tinker Tasks & Missions</strong> listed on the left panel for inspiration.',
        'Modify numbers, strings, loops, and conditions directly in the right-hand Python editor.',
        'Press <strong>Run Code</strong> (▶) to test your changes. Try to intentionally trigger a bug, then fix it!',
        'If stuck, toggle the <strong>Mentor Guide</strong> drawer in the top header for hints without spoilers.',
        'Click <strong>Mark Completed</strong> (✔) when done to update your 15-day progress bar!'
      ],
      tip: '<strong>🛠️ Tinker Pro Tip:</strong> Don\'t be afraid of red error messages! In Python Tinker Academy, errors are clues that show you exactly how the computer thinks.'
    }
  };

  const methodModalOverlay = document.getElementById('method-modal-overlay');
  const btnCloseMethodModal = document.getElementById('btn-close-method-modal');
  const btnMethodGotIt = document.getElementById('btn-method-got-it');

  function openMethodModal(key) {
    const info = methodData[key];
    if (!info || !methodModalOverlay) return;

    const iconEl = document.getElementById('method-modal-icon');
    const phaseEl = document.getElementById('method-modal-phase-pill');
    const titleEl = document.getElementById('method-modal-title');
    const meaningEl = document.getElementById('method-modal-meaning');

    if (iconEl) iconEl.textContent = info.icon;
    if (phaseEl) phaseEl.textContent = info.phase;
    if (titleEl) titleEl.textContent = info.title;
    if (meaningEl) meaningEl.textContent = info.meaning;

    const stepsOl = document.getElementById('method-modal-steps');
    if (stepsOl) {
      stepsOl.innerHTML = info.steps.map(step => `<li>${step}</li>`).join('');
    }

    const tipBox = document.getElementById('method-modal-tip-box');
    if (tipBox) {
      tipBox.innerHTML = info.tip;
    }

    methodModalOverlay.classList.add('active');
    methodModalOverlay.setAttribute('aria-hidden', 'false');
  }

  function closeMethodModal() {
    if (methodModalOverlay) {
      methodModalOverlay.classList.remove('active');
      methodModalOverlay.setAttribute('aria-hidden', 'true');
    }
  }

  document.querySelectorAll('.method-card[data-method]').forEach(card => {
    card.addEventListener('click', () => {
      const key = card.dataset.method;
      openMethodModal(key);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openMethodModal(card.dataset.method);
      }
    });
  });

  if (btnCloseMethodModal) btnCloseMethodModal.addEventListener('click', closeMethodModal);
  if (btnMethodGotIt) btnMethodGotIt.addEventListener('click', closeMethodModal);
  if (methodModalOverlay) {
    methodModalOverlay.addEventListener('click', (e) => {
      if (e.target === methodModalOverlay) closeMethodModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && methodModalOverlay && methodModalOverlay.classList.contains('active')) {
      closeMethodModal();
    }
  });

  // --- INITIAL RENDER ---
  renderRoadmap();
  checkUrlRouting();
});

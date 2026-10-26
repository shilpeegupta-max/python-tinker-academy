/**
 * Standalone Day Lesson Page Logic - Python Tinker Academy
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

  // Parse Day Number from window.CURRENT_DAY_ID, URL search param, or hash
  function getDayNumberFromUrl() {
    if (typeof window.CURRENT_DAY_ID === 'number' && window.CURRENT_DAY_ID >= 1 && window.CURRENT_DAY_ID <= 15) {
      return window.CURRENT_DAY_ID;
    }
    const params = new URLSearchParams(window.location.search);
    let day = parseInt(params.get('day') || '1', 10);

    if (isNaN(day) || day < 1 || day > 15) {
      const hash = window.location.hash;
      if (hash && hash.startsWith('#day')) {
        day = parseInt(hash.replace('#day', ''), 10);
      }
    }
    return (isNaN(day) || day < 1 || day > 15) ? 1 : day;
  }

  function getCurriculum() {
    return (typeof CURRICULUM !== 'undefined' && Array.isArray(CURRICULUM)) ? CURRICULUM : (window.CURRICULUM || []);
  }

  const activeDayNum = getDayNumberFromUrl();
  const curr = getCurriculum();
  const dayData = curr.find(d => d.day === activeDayNum) || curr[0] || null;

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
    activeDay: activeDayNum,
    activePhase: 'concept', // 'concept', 'liveCode', 'tinker'
    timer: {
      secondsLeft: 600,
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
  const leftPanel = document.getElementById('workspace-left-panel');
  const codeTextarea = document.getElementById('code-textarea');
  const viewDayTitle = document.getElementById('view-day-title');
  const viewDayFocus = document.getElementById('view-day-focus');
  const btnRunCode = document.getElementById('btn-run-code');
  const btnResetCode = document.getElementById('btn-reset-code');
  const btnMarkCompleted = document.getElementById('btn-mark-completed');

  // --- INITIALIZE PAGE CONTENT ---
  function initPage() {
    if (!dayData) {
      console.error('Curriculum data not loaded!');
      return;
    }

    document.title = `Day ${dayData.day}: ${dayData.title} - Python Tinker Academy`;
    if (viewDayTitle) viewDayTitle.textContent = `Day ${dayData.day}: ${dayData.title}`;
    if (viewDayFocus) viewDayFocus.textContent = `Focus Topic: ${dayData.focus}`;

    // Update mark completed button state
    updateCompletedButton();

    // Load saved or starter code
    const saved = state.savedCode[`day_${dayData.day}`];
    if (codeTextarea) {
      codeTextarea.value = saved || dayData.tinkerPlayground.starterCode;
    }

    // Set editor filename
    const fnEl = document.getElementById('editor-filename');
    if (fnEl) fnEl.textContent = `day${dayData.day}_tinker.py`;

    // Render initial concept phase dynamically
    switchPhaseTab('concept');

    // Update Mentor Drawer tips
    updateMentorDrawer(dayData);
  }

  function updateCompletedButton() {
    if (!btnMarkCompleted) return;
    const isComp = state.completedDays.includes(activeDayNum);
    btnMarkCompleted.innerHTML = isComp
      ? '<i class="fa-solid fa-circle-check"></i> Completed'
      : '<i class="fa-regular fa-circle-check"></i> Mark Completed';
    btnMarkCompleted.style.opacity = isComp ? '0.75' : '1';
  }

  // --- SWITCH PHASE TAB ---
  function switchPhaseTab(phase) {
    if (!dayData) return;
    state.activePhase = phase;

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
    state.savedCode[`day_${activeDayNum}`] = codeTextarea.value;
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
      if (codeTextarea && dayData) {
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
      if (!state.completedDays.includes(activeDayNum)) {
        state.completedDays.push(activeDayNum);
      } else {
        state.completedDays = state.completedDays.filter(d => d !== activeDayNum);
      }
      safeSetStorage('pta_completed_days', state.completedDays);
      updateCompletedButton();
    });
  }

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
    
    const badge = document.getElementById('timer-phase-badge');
    if (badge) {
      badge.className = `timer-phase-badge phase-${phase}`;
      if (phase === 'concept') badge.textContent = '10m Concept';
      else if (phase === 'liveCode') badge.textContent = '15m Live';
      else if (phase === 'tinker') badge.textContent = '20m Tinker';
    }

    updateTimerClockDisplay();
  }

  function updateTimerClockDisplay() {
    const clockEl = document.getElementById('timer-clock');
    if (!clockEl) return;
    const m = Math.floor(state.timer.secondsLeft / 60);
    const s = state.timer.secondsLeft % 60;
    clockEl.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }

  const btnTimerToggle = document.getElementById('btn-timer-toggle');
  if (btnTimerToggle) {
    btnTimerToggle.addEventListener('click', () => {
      if (state.timer.isRunning) {
        clearInterval(state.timer.intervalId);
        state.timer.isRunning = false;
        btnTimerToggle.innerHTML = '<i class="fa-solid fa-play"></i>';
      } else {
        state.timer.isRunning = true;
        btnTimerToggle.innerHTML = '<i class="fa-solid fa-pause"></i>';
        state.timer.intervalId = setInterval(() => {
          if (state.timer.secondsLeft > 0) {
            state.timer.secondsLeft--;
            updateTimerClockDisplay();
          } else {
            clearInterval(state.timer.intervalId);
            state.timer.isRunning = false;
            btnTimerToggle.innerHTML = '<i class="fa-solid fa-play"></i>';
            alert(`⏰ Timer Phase Complete! Time to move to the next phase!`);
          }
        }, 1000);
      }
    });
  }

  const btnTimerReset = document.getElementById('btn-timer-reset');
  if (btnTimerReset) {
    btnTimerReset.addEventListener('click', () => {
      if (state.timer.isRunning) {
        clearInterval(state.timer.intervalId);
        state.timer.isRunning = false;
        if (btnTimerToggle) btnTimerToggle.innerHTML = '<i class="fa-solid fa-play"></i>';
      }
      const sec = state.timer.phase === 'concept' ? 600 : state.timer.phase === 'liveCode' ? 900 : 1200;
      state.timer.secondsLeft = sec;
      updateTimerClockDisplay();
    });
  }

  // --- MENTOR DRAWER TOGGLE ---
  const mentorDrawer = document.getElementById('mentor-drawer');
  const btnMentorToggle = document.getElementById('btn-mentor-toggle');
  const btnCloseDrawer = document.getElementById('btn-close-drawer');

  if (btnMentorToggle && mentorDrawer) {
    btnMentorToggle.addEventListener('click', () => {
      if (dayData) updateMentorDrawer(dayData);
      mentorDrawer.classList.add('open');
    });
  }
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

  // Utility Helper
  function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // Init Page safely
  try {
    initPage();
  } catch (err) {
    console.error('Failed to initialize day workspace:', err);
  }
});

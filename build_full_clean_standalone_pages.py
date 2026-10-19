import re, html, json

# Load curriculum.js
with open('/home/shilpeegupta/PythonTinkerAcademy/js/curriculum.js', 'r') as f:
    curr_text = f.read()

# Extract array content from window.CURRICULUM = [...]
curr_match = re.search(r'(?:const CURRICULUM =|window\.CURRICULUM =)\s*(\[.*\]);', curr_text, re.DOTALL)
if not curr_match:
    print("Could not find CURRICULUM in curriculum.js!")
    exit(1)

# Clean up JS object to make it valid JSON
json_str = curr_match.group(1)
# Replace single line comments
json_str = re.sub(r'//.*?\n', '\n', json_str)
# Quote unquoted keys
json_str = re.sub(r'(\b[a-zA-Z0-9_]+\b)\s*:', r'"\1":', json_str)
# Fix trailing commas
json_str = re.sub(r',\s*([\]}])', r'\1', json_str)

try:
    curriculum_data = json.loads(json_str)
    print(f"Successfully parsed {len(curriculum_data)} days from curriculum.js JSON!")
except Exception as e:
    print("JSON parse failed, falling back to python exec parser:", e)
    # Python fallback exec parser
    py_dict_str = curr_match.group(1)
    py_dict_str = re.sub(r'//.*?\n', '\n', py_dict_str)
    # Replace true/false
    py_dict_str = py_dict_str.replace('true', 'True').replace('false', 'False')
    # Use python AST or exec
    scope = {}
    exec(f"data = {py_dict_str}", scope)
    curriculum_data = scope['data']
    print(f"Successfully loaded {len(curriculum_data)} days via Python exec!")

template = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Day {day_num}: {title} - Python Tinker Academy</title>
  
  <!-- Modern Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&family=Outfit:wght@400;500;600;700;800&family=Press+Start+2P&display=swap" rel="stylesheet">
  
  <!-- FontAwesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <!-- Application Stylesheet -->
  <link rel="stylesheet" href="styles.css?v=3">

  <!-- Skulpt Client-side Python Libraries -->
  <script src="js/skulpt.min.js?v=3"></script>
  <script src="js/skulpt-stdlib.js?v=3"></script>

  <style>
    body {{
      background: var(--bg-dark);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }}
    .standalone-page-header {{
      background: rgba(15, 23, 42, 0.95);
      border-bottom: 1px solid var(--border-glass);
      padding: 0.85rem 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      flex-wrap: wrap;
    }}
    .workspace-container {{
      flex: 1;
      display: flex;
      flex-direction: column;
      height: calc(100vh - 70px);
      overflow: hidden;
    }}
  </style>
</head>
<body>

  <!-- Workspace Top Header -->
  <header class="standalone-page-header">
    <div style="display: flex; align-items: center; gap: 1rem;">
      <a href="index.html" class="btn-secondary" style="text-decoration: none;">
        <i class="fa-solid fa-arrow-left"></i> Back to Roadmap
      </a>
      <div>
        <h2 id="view-day-title" style="font-size: 1.1rem; font-weight: 700; margin: 0; color: var(--text-primary);">
          Day {day_num}: {title}
        </h2>
        <p id="view-day-focus" style="font-size: 0.8rem; font-family: var(--font-code); margin: 0; color: var(--accent-cyan-glow);">
          Focus Topic: {focus}
        </p>
      </div>
    </div>

    <!-- Phase Switcher Tabs -->
    <div class="day-phase-tabs">
      <button class="phase-tab active" data-phase="concept" id="tab-phase-concept">
        1. Concept (10m)
      </button>
      <button class="phase-tab" data-phase="liveCode" id="tab-phase-liveCode">
        2. Live Code (15m)
      </button>
      <button class="phase-tab" data-phase="tinker" id="tab-phase-tinker">
        3. Tinker Lab (20m)
      </button>
    </div>

    <div style="display: flex; align-items: center; gap: 0.75rem;">
      <!-- Session Timer Widget -->
      <div class="session-timer-widget" id="session-timer">
        <span class="timer-phase-badge phase-concept" id="timer-phase-badge">10m Concept</span>
        <span class="timer-clock" id="timer-clock">10:00</span>
        <div class="timer-controls">
          <button class="btn-icon" id="btn-timer-toggle" title="Play/Pause Session Timer">
            <i class="fa-solid fa-play"></i>
          </button>
          <button class="btn-icon" id="btn-timer-reset" title="Reset Timer">
            <i class="fa-solid fa-rotate-right"></i>
          </button>
        </div>
      </div>

      <!-- Parent / Mentor Guide Toggle -->
      <button class="btn-secondary" id="btn-mentor-toggle">
        <i class="fa-solid fa-user-ninja"></i> Mentor Guide
      </button>

      <!-- Complete Day Button -->
      <button class="btn-primary" id="btn-mark-completed">
        <i class="fa-solid fa-circle-check"></i> Mark Completed
      </button>
    </div>
  </header>

  <!-- Split Screen Workspace -->
  <div class="workspace-container">
    <div class="day-workspace" style="height: 100%;">
      
      <!-- Left Panel: Lesson Explanation / Walkthrough / Challenges -->
      <div class="left-panel" id="workspace-left-panel">
        <div class="concept-card">
          <h3>🧠 Concept Breakdown</h3>
          <p style="font-size: 1rem; font-weight: 600; margin-bottom: 0.85rem; color: var(--text-primary);">
            {concept_headline}
          </p>
          <div class="analogy-box">
            <strong>💡 Everyday Analogy:</strong><br>{concept_explanation}
          </div>

          <h4 style="font-size: 0.88rem; color: var(--accent-cyan-glow); margin-bottom: 0.5rem;">Syntax Cheat Sheet:</h4>
          <pre class="code-snippet-pre">{concept_syntax}</pre>

          <h4 style="font-size: 0.88rem; color: var(--accent-cyan-glow); margin-bottom: 0.5rem;">Key Takeaways:</h4>
          <ul class="takeaways-list">
            {key_takeaways_html}
          </ul>

          <!-- Quick Quiz -->
          <div class="quiz-box">
            <div class="quiz-question">❓ Quick Check: {quiz_question}</div>
            <div class="quiz-options">
              {quiz_options_html}
            </div>
            <div class="quiz-feedback" id="quiz-feedback"></div>
          </div>
        </div>
      </div>

      <!-- Right Panel: Python IDE Editor & Output Canvas -->
      <div class="right-panel">
        
        <!-- Editor Toolbar -->
        <div class="editor-toolbar">
          <div class="editor-title">
            <i class="fa-brands fa-python" style="color: var(--accent-cyan);"></i>
            <span id="editor-filename">day{day_num}_tinker.py</span>
          </div>
          <div class="editor-actions">
            <button class="btn-run" id="btn-run-code">
              <i class="fa-solid fa-play"></i> Run Code
            </button>
            <button class="btn-reset" id="btn-reset-code" title="Reset code to starter">
              <i class="fa-solid fa-rotate-left"></i> Reset
            </button>
          </div>
        </div>

        <!-- Code Editor Textarea -->
        <div class="code-editor-wrapper">
          <textarea class="code-textarea" id="code-textarea" spellcheck="false" placeholder="# Type Python code here...">{starter_code_escaped}</textarea>
        </div>

        <!-- Output Pane (Terminal & Turtle Canvas) -->
        <div class="output-pane">
          <div class="output-tabs">
            <button class="output-tab-btn active" id="tab-output-term" data-target="terminal">
              <i class="fa-solid fa-terminal"></i> Terminal Output
            </button>
            <button class="output-tab-btn" id="tab-output-turtle" data-target="turtle">
              <i class="fa-solid fa-palette"></i> Turtle Canvas
            </button>
          </div>

          <!-- Terminal Window -->
          <div class="terminal-window" id="terminal-window">
            <span class="term-line">Python 3.8.0 (Skulpt Virtual Environment)</span>
            <span class="term-line">Press 'Run Code' above to execute your script!</span>
          </div>

          <!-- Turtle Canvas Container -->
          <div class="turtle-canvas-container" id="turtle-container">
            <div id="turtle-canvas"></div>
          </div>
        </div>

      </div>

    </div>
  </div>

  <!-- Parent / Mentor Guide Drawer -->
  <aside class="mentor-drawer" id="mentor-drawer">
    <button class="drawer-close-btn" id="btn-close-drawer">
      <i class="fa-solid fa-xmark"></i>
    </button>
    <div class="mentor-title">
      <i class="fa-solid fa-user-ninja"></i>
      Parent / Mentor Companion
    </div>
    <div id="mentor-drawer-content">
      <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1rem;">
        Welcome! You don't need to be a programmer to mentor your 13-year-old through this course.
      </p>
      <div class="concept-card">
        <h3>💡 The "Tinker, don't lecture" Formula</h3>
        <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5;">
          1. Spend 10 minutes discussing the concept card together.<br>
          2. Spend 15 minutes typing the live code walkthrough together.<br>
          3. Give them 20 minutes of quiet creative freedom to break code, customize values, and complete the 3 Tinker Challenges!
        </p>
      </div>
      <div id="mentor-day-tips">
        <div class="concept-card" style="margin-top: 1rem;">
          <h3>📌 Day {day_num} Mentor Notes</h3>
          <h4 style="font-size: 0.85rem; color: var(--accent-rose); margin-bottom: 0.4rem;">Common Stumbling Blocks:</h4>
          <ul style="font-size: 0.82rem; color: var(--text-secondary); margin-left: 1rem; margin-bottom: 1rem;">
            {stumbling_blocks_html}
          </ul>
          <h4 style="font-size: 0.85rem; color: var(--accent-gold); margin-bottom: 0.4rem;">Prompting Questions:</h4>
          <ul style="font-size: 0.82rem; color: var(--text-secondary); margin-left: 1rem;">
            {prompting_questions_html}
          </ul>
        </div>
      </div>
    </div>
  </aside>

  <!-- Application Logic Scripts -->
  <script>
    window.CURRENT_DAY_ID = {day_num};
  </script>
  <script src="js/curriculum.js?v=3"></script>
  <script src="js/skulpt-runner.js?v=3"></script>
  <script src="js/day-app.js?v=3"></script>
</body>
</html>
"""

for day_data in curriculum_data:
    day_num = day_data['day']
    title = day_data['title']
    focus = day_data['focus']
    concept = day_data['concept']
    tinker = day_data['tinkerPlayground']
    mentor = day_data['mentorNotes']

    takeaways = concept.get('keyTakeaways', [])
    key_takeaways_html = "".join([f"<li>{html.escape(t)}</li>" for t in takeaways])

    quiz = concept.get('quickQuiz', {})
    options = quiz.get('options', [])
    quiz_options_html = "".join([
        f'<button class="quiz-option-btn" data-idx="{idx}">{html.escape(opt)}</button>'
        for idx, opt in enumerate(options)
    ])

    stumbling = mentor.get('commonStumblingBlocks', [])
    stumbling_blocks_html = "".join([f"<li>{html.escape(sb)}</li>" for sb in stumbling])

    questions = mentor.get('tinkerQuestions', [])
    prompting_questions_html = "".join([f'<li>"{html.escape(q)}"</li>' for q in questions])

    page_html = template.format(
        day_num=day_num,
        title=html.escape(title),
        focus=html.escape(focus),
        concept_headline=html.escape(concept.get('headline', '')),
        concept_explanation=html.escape(concept.get('explanation', '')),
        concept_syntax=html.escape(concept.get('syntaxSnippet', '')),
        key_takeaways_html=key_takeaways_html,
        quiz_question=html.escape(quiz.get('question', '')),
        quiz_options_html=quiz_options_html,
        starter_code_escaped=html.escape(tinker.get('starterCode', '')),
        stumbling_blocks_html=stumbling_blocks_html,
        prompting_questions_html=prompting_questions_html
    )

    filename = f"/home/shilpeegupta/PythonTinkerAcademy/day{day_num}.html"
    with open(filename, 'w') as f:
        f.write(page_html)

print(f"Generated clean standalone pages day1.html through day15.html successfully!")

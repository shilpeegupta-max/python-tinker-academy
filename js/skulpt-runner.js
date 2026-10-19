/**
 * Skulpt Python Engine Wrapper
 * Python Tinker Academy
 */

class PythonRunner {
  constructor(options = {}) {
    this.terminalEl = options.terminalEl || null;
    this.canvasEl = options.canvasEl || null;
    this.inputPromptCallback = options.inputPromptCallback || null;
    this.isRunning = false;
    this.currentPromise = null;
  }

  setTerminal(el) {
    this.terminalEl = el;
  }

  setCanvas(el) {
    this.canvasEl = el;
  }

  setInputCallback(cb) {
    this.inputPromptCallback = cb;
  }

  clearTerminal() {
    if (this.terminalEl) {
      this.terminalEl.innerHTML = '';
    }
  }

  appendOutput(text, isError = false) {
    if (!this.terminalEl) return;

    // Convert ANSI escape codes to styled HTML
    const formatted = this.parseAnsiColors(text);
    
    const line = document.createElement('span');
    if (isError) {
      line.className = 'term-line term-error';
    } else {
      line.className = 'term-line';
    }
    line.innerHTML = formatted;
    this.terminalEl.appendChild(line);
    this.terminalEl.scrollTop = this.terminalEl.scrollHeight;
  }

  parseAnsiColors(str) {
    if (!str) return '';
    
    // Escape HTML special characters first
    let html = str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Map ANSI escape sequences to CSS spans
    const ansiMap = {
      '\\033[91m': '<span style="color: #f87171; font-weight: bold;">', // Red
      '\\033[92m': '<span style="color: #4ade80; font-weight: bold;">', // Green
      '\\033[93m': '<span style="color: #facc15; font-weight: bold;">', // Yellow / Gold
      '\u001b[95m': '<span style="color: #c084fc; font-weight: bold;">', // Magenta
      '\\033[96m': '<span style="color: #38bdf8; font-weight: bold;">', // Cyan
      '\\033[0m': '</span>',
      '\u001b[91m': '<span style="color: #f87171; font-weight: bold;">',
      '\u001b[92m': '<span style="color: #4ade80; font-weight: bold;">',
      '\u001b[93m': '<span style="color: #facc15; font-weight: bold;">',
      '\u001b[95m': '<span style="color: #c084fc; font-weight: bold;">',
      '\u001b[96m': '<span style="color: #38bdf8; font-weight: bold;">',
      '\u001b[0m': '</span>'
    };

    for (const [code, tag] of Object.entries(ansiMap)) {
      html = html.split(code).join(tag);
    }

    // Convert newlines to <br>
    return html.replace(/\n/g, '<br>');
  }

  async runCode(code) {
    if (this.isRunning) {
      this.appendOutput('\n[!] Stopping previous running execution...\n', true);
      this.isRunning = false;
    }

    this.clearTerminal();
    this.isRunning = true;
    this.appendOutput('⚡ Initializing Python Execution Environment...\n');

    // Setup Skulpt configuration
    const self = this;

    // Reset Turtle canvas if available
    if (this.canvasEl) {
      this.canvasEl.innerHTML = '';
    }

    Sk.configure({
      output: (text) => self.appendOutput(text),
      read: (file) => self.builtinRead(file),
      inputfun: (promptText) => self.handleInput(promptText),
      inputfunTakesPrompt: true,
      yieldLimit: 100, // Frequent yields for responsive UI
      __future__: Sk.python3
    });

    // Configure Turtle target canvas
    if (this.canvasEl) {
      (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = this.canvasEl.id || 'turtle-canvas';
      Sk.TurtleGraphics.width = 500;
      Sk.TurtleGraphics.height = 400;
    }

    try {
      const promise = Sk.misceval.asyncToPromise(() => {
        return Sk.importMainWithBody('<stdin>', false, code, true);
      });
      
      this.currentPromise = promise;
      await promise;
      
      if (this.isRunning) {
        this.appendOutput('\n\n✅ Program Execution Completed Successfully.');
      }
    } catch (err) {
      const errMsg = err.toString();
      this.appendOutput(`\n\n❌ ${errMsg}`, true);
    } finally {
      this.isRunning = false;
      this.currentPromise = null;
    }
  }

  builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles['files'][x] === undefined) {
      throw `File not found: '${x}'`;
    }
    return Sk.builtinFiles['files'][x];
  }

  handleInput(promptText) {
    const self = this;
    if (promptText) {
      self.appendOutput(promptText);
    }

    return new Promise((resolve) => {
      if (self.inputPromptCallback) {
        self.inputPromptCallback(promptText || 'Enter input:', (userVal) => {
          self.appendOutput(`${userVal}\n`);
          resolve(userVal);
        });
      } else {
        const userVal = window.prompt(promptText || 'Python input request:') || '';
        self.appendOutput(`${userVal}\n`);
        resolve(userVal);
      }
    });
  }

  stopCode() {
    this.isRunning = false;
    this.appendOutput('\n🛑 Program execution stopped by user.', true);
  }
}

if (typeof window !== 'undefined') {
  window.PythonRunner = PythonRunner;
}

class ModeManager {
  constructor() {
    this.modes = {};
    this.observers = [];
  }

  subscribe(ob) {
    this.observers.push(ob);
  }

  notify() {
    this.observers.forEach(function(ob, i) {
      ob.OnModeManagerChange();
    });
  }
  registerModeModes(modes) {
    for (let i = 0; i < modes.length; i++) {
      let mode = modes[i].mode;
      let init_state = modes[i].init_state;

      this.modes[mode] = init_state;
    }

    this.notify();
  }

  setMode(modes) {
    for (let i = 0; i < modes.length; i++) {
      let mode = modes[i].mode;
      let value = modes[i].value;

      this.modes[mode] = value;
    }
    this.notify();
  }

  clone() {
    return {
      ...this.modes
    };
  }
}

let mode_manager = new ModeManager();
mode_manager.registerModeModes([
  { mode: "drawing", init_state: false },
  { mode: "running", init_state: false },
  { mode: "started", init_state: false }
]);

export default mode_manager;

import GameModel from "./GameModel";
import { states } from "./game_states";
import mode_manager from "../GameComponents/ModeDisplay/ModeManager";

class GameController {
  constructor(nr, nc) {
    this.game = new GameModel(nr, nc);
    this.state = states.waiting;
    this.timer = null;
    this.speeds = [0.1, 0.2, 0.3, 0.4, 0.5, 1, 1.5, 2, 2.5];
    this.speed = 4;
    this.observers = [];
    this.game.subscribe(this);
  }
  /**************************************************/
  toggle(i, j) {
    this.game.grid.getCell(i, j).toggle();
    this.game.updateCache();
    mode_manager.setMode([{ mode: "drawing", value: true }]);
    this.notify();
  }
  /**************************************************/
  subscribe(obj) {
    console.log("subscribed to game controller");
    this.observers.push(obj);
  }
  /**************************************************/
  notify() {
    this.observers.forEach(function(obj, i) {
      obj.onGameControllerUpdate();
    });
  }
  /****************************************************/
  onGameChange() {
    this.notify();
  }
  /**************************************************/
  get numRows() {
    return this.game.grid.nr;
  }
  /**************************************************/
  get numCols() {
    return this.game.grid.nc;
  }
  /**************************************************/
  get grid() {
    return this.game.grid.repr();
  }
  /**************************************************/
  slowDown() {
    if (this.speed > 0) {
      this.speed--;
      //  clear last interval
      if (this.timer !== null) {
        clearInterval(this.timer);
        this.timer = null;
        // start new one
        this.timer = setInterval(
          this.playFrame.bind(this),
          this.speeds[this.speed]
        );
      }
      this.notify();
      return true;
    }
    return false;
  }
  /**************************************************/
  get getSpeed() {
    return this.speeds[this.speed];
  }
  /**************************************************/
  speedUp() {
    if (this.speed < this.speeds.length - 1) {
      this.speed++;
      //  clear last interval
      if (this.timer !== null) {
        clearInterval(this.timer);
        this.timer = null;
        // start new one
        this.timer = setInterval(
          this.playFrame.bind(this),
          this.speeds[this.speed]
        );
      }
      this.notify();
      return true;
    }
    return false;
  }
  /**************************************************/
  run() {
    this.timer = setInterval(
      this.playFrame.bind(this),
      this.speeds[this.speed]
    );
    this.state = states.running;
    mode_manager.setMode([
      { mode: "started", value: true },
      { mode: "running", value: true },
      { mode: "drawing", value: false }
    ]);
  }
  /**************************************************/
  playFrame() {
    this.game.step();
    this.notify();
  }
  /**************************************************/
  pause() {
    clearInterval(this.timer);
    this.timer = null;
    this.state = states.paused;
    mode_manager.setMode([
      { mode: "running", value: false },
      { mode: "drawing", value: false }
    ]);
  }
  /**************************************************/
  restart() {
    // clear the grid
    this.game.restart();
    clearInterval(this.timer);
    this.timer = null;
    this.state = states.restarted;
    mode_manager.setMode([
      { mode: "running", value: false },
      { mode: "drawing", value: false }
    ]);
    this.notify();
  }
  /**************************************************/
  fastForward() {
    this.game.step();
    this.state = states.fastForward;
    mode_manager.setMode([{ mode: "running", value: false }]);
    this.notify();
  }
  /**************************************************/
  rewind() {
    if (this.game.rewind()) {
      this.state = states.rewind;
      mode_manager.setMode([{ mode: "running", value: false }]);
      this.notify();
    }
  }
}

export default GameController;

import GridModel from "./GridModel";

class GameModel {
  constructor(nr, nc) {
    this.grid = new GridModel(nr, nc);
    this.grid.subscribe(this);
    this.cache = [this.grid.repr()];
    this.cacheIndex = 0;
    this.observers = [];
  }
  /****************************************************/
  subscribe(obj) {
    this.observers.push(obj);
  }
  /****************************************************/
  notify() {
    let that = this;
    this.observers.forEach(function(obj, i) {
      obj.OnGameChange(that);
    });
  }
  /****************************************************/
  onGridChange() {
    this.notify();
  }
  /**************************************************/
  updateCache(last) {
    if (last === undefined) last = this.lastRepr;
    if (!this.grid.equals(last)) {
      this.cacheIndex++;

      // appending at an earlier state
      let delete_count =
        this.cacheIndex === this.cache.length
          ? 0
          : this.cache.length - this.cacheIndex + 1;
      this.cache.splice(this.cacheIndex, delete_count, this.grid.repr());
    }
  }
  /**************************************************/
  rewind() {
    if (this.cacheIndex > 0) {
      //let last = this.cache.pop();
      this.cacheIndex--;
      this.grid.copy(this.lastRepr);
      return true; // changed
    }

    return false; // did not change
  }
  /**************************************************/
  restart() {
    this.grid.clear();
    while (this.cache.length > 1) this.cache.pop();
  }
  /**************************************************/
  get lastRepr() {
    return this.cache[this.cacheIndex];
  }
  /**************************************************/
  step() {
    let old = this.grid.repr();
    this.grid.generateNextState();
    this.updateCache(old);
  }
}

export default GameModel;

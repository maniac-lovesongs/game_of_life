class CellModel {
  constructor(id, r, c, grid) {
    this.row = r;
    this.col = c;
    this.is_alive = false;
    this.num_live_neighbors = 0;
    this.grid = grid;
    this.next = this.is_alive;
    this.observers = [];
    this.id = id;
  }
  subscribe(obj) {
    this.observers.push(obj);
  }

  notify() {
    this.observers.forEach(function(v, i) {
      v.onCellChange();
    });
  }

  setIsAlive(is_alive) {
    this.is_alive = is_alive;
  }

  toggle() {
    this.is_alive = !this.is_alive;
  }

  reset() {
    this.is_alive = false;
    this.num_live_neighbors = 0;
  }

  determineNextState() {
    let neighbors = this.getNumLiveNeighbors;
    this.next = this.is_alive;

    // should toggle?
    if (this.is_alive) {
      //  kill
      if (neighbors < 2 || neighbors > 3) this.next = !this.is_alive;
    } else {
      // come to life
      if (neighbors === 3) this.next = !this.is_alive;
    }
  }

  update() {
    this.is_alive = this.next;
  }

  get getNumLiveNeighbors() {
    let adjusts = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1]
    ];
    let nc = this.grid.nc;
    let nr = this.grid.nr;

    let count = 0;
    for (let index = 0; index < adjusts.length; index++) {
      let row_adj = this.row + adjusts[index][0];
      let col_adj = this.col + adjusts[index][1];

      let row_in_range = row_adj >= 0 && row_adj < nr;
      let col_in_range = col_adj >= 0 && col_adj < nc;
      let in_range = row_in_range && col_in_range;

      if (in_range && this.grid.getCell(row_adj, col_adj).is_alive) count++;
    }

    this.num_live_neighbors = count;
    return this.num_live_neighbors;
  }
}
export default CellModel;

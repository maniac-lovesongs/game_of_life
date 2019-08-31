import CellModel from "./CellModel";

class GridModel {
  constructor(nr, nc) {
    this.nr = nr;
    this.nc = nc;

    this.matrix = [];
    let id = 0;
    for (let i = 0; i < nr; i++) {
      this.matrix.push([]);
      for (let j = 0; j < nc; j++) {
        let cell = new CellModel(id, i, j, this);
        this.matrix[i].push(cell);
        this.matrix[i][j].subscribe(this);
        id++;
      }
    }

    this.observers = [];
  }
  /****************************************************/
  subscribe(obj) {
    this.observers.push(obj);
  }
  /****************************************************/
  notify() {
    this.observers.forEach(function(obj, i) {
      obj.onGridChange();
    });
  }
  /****************************************************/
  onCellChange() {
    this.notify();
  }
  /****************************************************/
  clear() {
    for (let i = 0; i < this.nr; i++) {
      for (let j = 0; j < this.nc; j++) {
        this.getCell(i, j).reset();
      }
    }
  }
  /****************************************************/
  getCell(r, c) {
    return this.matrix[r][c];
  }
  /****************************************************/
  equals(other) {
    return JSON.stringify(other) === JSON.stringify(this.repr());
  }
  /****************************************************/
  copy(other) {
    for (let r = 0; r < this.nr; r++) {
      for (let c = 0; c < this.nc; c++) {
        if (this.getCell(r, c).is_alive !== other[r][c])
          this.getCell(r, c).setIsAlive(other[r][c]);
      }
    }
  }
  /****************************************************/
  repr() {
    return this.matrix.map(function(row, r) {
      return row.map(function(cell, c) {
        return cell.is_alive;
      });
    });
  }
  /****************************************************/
  determineNextState() {
    for (let row = 0; row < this.nr; row++) {
      for (let col = 0; col < this.nc; col++) {
        this.getCell(row, col).determineNextState();
      }
    }
  }
  /****************************************************/
  transitionToNextState() {
    for (let row = 0; row < this.nr; row++) {
      for (let col = 0; col < this.nc; col++) {
        this.getCell(row, col).update();
      }
    }
  }
  /****************************************************/
  generateNextState() {
    this.determineNextState();
    this.transitionToNextState();
  }
}

export default GridModel;

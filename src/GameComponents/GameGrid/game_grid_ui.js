import React, { Component } from "react";
import Cell from "../Cell/cell_ui";

class GameGrid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let w = this.props.w;
    let h = this.props.h;
    return this.props.grid.map(function(row, r) {
      return row.map(function(col, c) {
        return (
          <Cell
            row={r}
            col={c}
            x={c * w}
            y={h * r}
            alive_color={`rgb(
              ${Math.floor(255 - 4.5 * r)},
               0,
              ${Math.floor(255 - 4.5 * c)})`}
            width={w}
            height={h}
            alive={col}
            key={"r" + r + "c" + c}
          />
        );
      });
    });
  }
}

export default GameGrid;

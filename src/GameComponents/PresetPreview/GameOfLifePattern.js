import React from "react";
import { Layer, Rect } from "react-konva";
import { world_config } from "../config";

class GameOfLifePattern {
  constructor(pattern, name) {
    this.pattern = pattern;
    this.num_rows = pattern.length;
    this.num_cells = pattern[0].length;
    this.name = name;
    this.category = [];
  }
  addCategory(cats) {
    for (let i = 0; i < cats.length; i++) this.category.push(cats[i]);
  }
  renderCell(r, c, w, h) {
    return (
      <Rect
        key={"presetpreview" + r + "," + c}
        x={c * w}
        y={r * h}
        width={w}
        height={h}
        fill={this.pattern[r][c] === 1 ? "white" : "black"}
        stroke={world_config.stroke_color}
      />
    );
  }
  drawPattern(w, h) {
    let rc = this.renderCell;
    return (
      <Layer>
        {this.pattern.map(function(row, r) {
          return row.map(function(col, c) {
            return rc(r, c, w, h);
          });
        })}
      </Layer>
    );
  }
}

export default GameOfLifePattern;

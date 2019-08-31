import React, { Component } from "react";
import { Stage, Layer, Rect } from "react-konva";
import { world_config } from "../config";
import "./PresetPreview.css";

class PresetPreview extends Component {
  constructor(props) {
    super(props);
    let grid = [];
    for (let i = 0; i < this.props.rows; i++) {
      grid.push([]);
      for (let j = 0; j < this.props.cols; j++) {
        grid[i].push(false);
      }
    }

    this.state = {
      grid: grid
    };
  }
  render() {
    let size = this.props.size;
    return (
      <Stage
        className="preset-preview-canvas"
        width={size * this.props.cols}
        height={size * this.props.rows}
      />
    );
  }
}
export default PresetPreview;

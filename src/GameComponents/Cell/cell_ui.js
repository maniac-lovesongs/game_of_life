import React, { Component } from "react";
import { Rect } from "react-konva";
import { world_config } from "../config";
import cell_ui_handlers from "./cell_ui_handlers";

class Cell extends Component {
  constructor(props) {
    super(props);

    this.handleOnClick = cell_ui_handlers.handleOnClick.bind(this);
    this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
    this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
  }

  handleOnMouseEnter(e) {
    e.target.to({
      fill: world_config.hover_color
    });
  }

  handleOnMouseLeave(e) {
    let alive = this.props.alive;
    let alive_color = this.props.alive_color;
    e.target.to({
      fill: alive ? alive_color : world_config.dead_color
    });
  }

  render() {
    return (
      <Rect
        x={this.props.x}
        y={this.props.y}
        width={this.props.width}
        height={this.props.height}
        onClick={this.handleOnClick}
        onTap={this.handleOnClick}
        onMouseEnter={this.handleOnMouseEnter}
        onMouseLeave={this.handleOnMouseLeave}
        fill={
          this.props.alive ? this.props.alive_color : world_config.dead_color
        }
        stroke={world_config.stroke_color}
      />
    );
  }
}

export default Cell;

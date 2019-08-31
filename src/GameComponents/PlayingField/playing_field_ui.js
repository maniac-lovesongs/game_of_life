import React, { Component } from "react";
import GameGrid from "../GameGrid/game_grid_ui";
import { world_config } from "../config";
import { Stage, Layer } from "react-konva";

class PlayingField extends Component {
  render() {
    return (
      <div>
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <GameGrid
              num_rows={this.props.num_rows}
              num_cols={this.props.num_cols}
              w={world_config.width}
              grid={this.props.grid}
              h={world_config.height}
            />
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default PlayingField;

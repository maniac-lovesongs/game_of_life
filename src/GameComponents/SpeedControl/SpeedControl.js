import React, { Component } from "react";
import gc from "../../game_config";
import "./SpeedControl.css";
import Tooltip from "@material-ui/core/Tooltip";
import { CloseRounded } from "@material-ui/icons";

class SpeedControl extends Component {
  constructor(props) {
    super(props);
    this.onSlowDown = this.onSlowDown.bind(this);
    this.onSpeedUp = this.onSpeedUp.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onClose(event) {
    this.props.onClose();
  }

  onSlowDown(event) {
    gc.slowDown();
  }

  onSpeedUp(event) {
    gc.speedUp();
  }

  render() {
    return (
      <div
        className={
          "gradient-border tab-content" +
          (this.props.open ? " animate-in" : " hide")
        }
      >
        <div className="speed-display">
          <p className="mode">
            <span className="label">Speed</span>
            <span className="value">{this.props.speed}s</span>
          </p>
          <p className="mode">
            <span className="label button" onClick={this.onSlowDown}>
              down
            </span>
          </p>
          <p className="mode">
            <span className="label button" onClick={this.onSpeedUp}>
              up
            </span>
          </p>
          <Tooltip title="close">
            <CloseRounded className="close-icon" onClick={this.onClose} />
          </Tooltip>
        </div>
      </div>
    );
  }
}

export default SpeedControl;

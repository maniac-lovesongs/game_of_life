import React, { Component } from "react";
import mode_manager from "./ModeManager";
import "./ModeDisplay.css";

class ModeDisplay extends Component {
  constructor(props) {
    super(props);
    mode_manager.subscribe(this);

    this.state = {
      ...mode_manager.clone()
    };
  }

  OnModeManagerChange() {
    this.setState(function(state, props) {
      return {
        ...mode_manager.clone()
      };
    });
  }

  render() {
    return (
      <div className="mode-display-wrapper">
        <div className="mode-display">
          <p className="mode">
            <span className="label">Started</span>
            <span className="value">
              {this.state.started ? "true" : "false"}
            </span>
          </p>
          <p className="mode">
            <span className="label">Running</span>
            <span className="value">
              {this.state.running ? "true" : "false"}
            </span>
          </p>
          <p className="mode">
            <span className="label">Drawing</span>
            <span className="value">
              {this.state.drawing ? "true" : "false"}
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default ModeDisplay;

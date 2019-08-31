import React, { Component } from "react";
import { Tooltip } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import "./BackToGame.css";
class BackToGame extends Component {
  render() {
    return (
      <div>
        <Tooltip title="back to game">
          <div className="back-to-game gradient-border">
            <div className="inner-wrapper">
              <ArrowBack />
            </div>
          </div>
        </Tooltip>
      </div>
    );
  }
}
export default BackToGame;

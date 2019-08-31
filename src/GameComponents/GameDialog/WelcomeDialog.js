import React, { Component } from "react";
import GameDialog from "./GameDialog";
import dialog_manager from "./DialogManager";

class WelcomeDialog extends Component {
  handleOnClick = e => {
    dialog_manager.closeDialog("welcome");
  };

  render() {
    return (
      <GameDialog
        open={this.props.open}
        title={"Welcome to Conway's Game of Life"}
        onClose={this.handleOnClick}
        onButtonClick={this.handleOnClick}
        submitValue={"Got it? Start!"}
      >
        <div>
          Conway's Game of Life simulates cellular life using a grid. Here is
          how it works:
          <ul>
            <li>Cells in the grid are either alive or dead</li>
            <li>
              <b>Black</b> cells are dead.
            </li>
            <li>
              <b>Non-black</b> cells are alive.
            </li>
            <li>
              <b>Tapping</b> on dead cells brings them to life. Similarly,
              <b> tapping</b> on living cells kills them.
            </li>
            <li>
              <b>Draw</b> a pattern on the grid to initialize it.
            </li>
            <li>
              Press <b>play</b> to bring your grid to life.
            </li>
            <li>
              Press <b>help</b> to learn more about the rules of the game.
            </li>
          </ul>
        </div>
      </GameDialog>
    );
  }
}

export default WelcomeDialog;

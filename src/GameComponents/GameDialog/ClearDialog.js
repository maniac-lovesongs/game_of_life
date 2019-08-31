import React, { Component } from "react";
import GameDialog from "./GameDialog";
import dialog_manager from "./DialogManager";
import gc from "../../game_config";

class ClearDialog extends Component {
  handleOnClick = e => {
    dialog_manager.closeDialog("clear");
  };

  handleClear = e => {
    gc.restart();
    dialog_manager.closeDialog("clear");
  };

  render() {
    return (
      <GameDialog
        open={this.props.open}
        title={"Clear Grid"}
        id="clear"
        onClose={this.handleOnClick}
        onButtonClick={this.handleClear}
        submitValue={"Yes!"}
      >
        <div>
          Clearing the grid will kill every cell. Are you sure you want to do
          that? To clear the grid, click yes. Otherwise, click "x" in the upper
          right corner to return to the game.
        </div>
      </GameDialog>
    );
  }
}

export default ClearDialog;

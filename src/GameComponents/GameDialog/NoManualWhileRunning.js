import React, { Component } from "react";
import GameDialog from "./GameDialog";
import dialog_manager from "./DialogManager";
import gc from "../../game_config";

class NoManualWhileRunning extends Component {
  handleOnClick = e => {
    dialog_manager.closeDialog("no_manual");
  };
  handleOnButtonClick = e => {
    gc.pause();
    dialog_manager.closeDialog("no_manual");
  };
  render() {
    return (
      <GameDialog
        open={this.props.open}
        title={"Cannot Manually Step Through While Running"}
        onClose={this.handleOnClick}
        onButtonClick={this.handleOnButtonClick}
        submitValue={"Okay, pause!"}
      >
        If you would like to manually step through the generations, either
        forward or backward, then you must first pause the simulation.
      </GameDialog>
    );
  }
}

export default NoManualWhileRunning;

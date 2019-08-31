import React, { Component } from "react";
import gc from "./game_config";
import dialog_manager from "./GameComponents/GameDialog/DialogManager";
import PlayingField from "./GameComponents/PlayingField/playing_field_ui";
import FixedBottomMenu from "./GameComponents/FixedBottomMenu/FixedBottomMenu";
import ClearDialog from "./GameComponents/GameDialog/ClearDialog";
import WelcomeDialog from "./GameComponents/GameDialog/WelcomeDialog";
import NoManualWhileRunning from "./GameComponents/GameDialog/NoManualWhileRunning";
import scene_manager from "./GameComponents/SceneManager";
import SettingsScene from "./GameComponents/SettingsScene/SettingsScene";
import Drawers from "./GameComponents/Drawers/Drawers";

class GameEntry extends Component {
  constructor(props) {
    super(props);

    // subscriptions
    scene_manager.addScenes(
      ["game-scene", "help-scene", "settings-scene"],
      "settings-scene"
    );
    dialog_manager.addDialogs(["clear", "no_manual"], ["welcome"]);
    let that = this;
    [gc, dialog_manager, scene_manager].forEach(function(service, i) {
      service.subscribe(that);
    });

    // All the dialogs in the
    this.state = {
      speed: gc.getSpeed,
      grid: gc.grid,
      scene_open: scene_manager.cloneScenes(),
      dialogs_open: dialog_manager.cloneState()
    };
  }
  // Dialog Manager hooks
  onSceneManagerChange() {
    this.setState(function(state, props) {
      return {
        ...state,
        scene_open: scene_manager.cloneScenes()
      };
    });
  }

  // Dialog Manager hooks
  onDialogChange() {
    this.setState(function(state, props) {
      return {
        ...state,
        dialogs_open: dialog_manager.cloneState()
      };
    });
  }

  // Game Controller Hook
  onGameControllerUpdate() {
    // on game controller update notification,
    // update the grid
    this.setState(function(state, props) {
      return {
        ...state,
        speed: gc.getSpeed,
        grid: gc.grid
      };
    });
  }

  render() {
    return (
      <div>
        <div
          id="game-scene"
          className={scene_manager.makeClasses("game-scene")}
          open={this.state.scene_open["game-scene"]}
        >
          <Drawers speed={this.state.speed} />
          <NoManualWhileRunning open={this.state.dialogs_open.no_manual} />
          <WelcomeDialog open={this.state.dialogs_open.welcome} />
          <ClearDialog open={this.state.dialogs_open.clear} />
          <PlayingField
            grid={this.state.grid}
            num_rows={gc.numRows}
            num_cols={gc.numCols}
          />
          <FixedBottomMenu />
        </div>
        <div
          id="help-scene"
          className={scene_manager.makeClasses("help-scene")}
          open={this.state.scene_open["help-scene"]}
        >
          help
        </div>
        <div
          id="settings-scene"
          className={scene_manager.makeClasses("settings-scene")}
          open={this.state.scene_open["settings-scene"]}
        >
          <SettingsScene />
        </div>
      </div>
    );
  }
}

export default GameEntry;

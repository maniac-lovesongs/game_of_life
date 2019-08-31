import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";
import dialog_manager from "../GameDialog/DialogManager";
import gc from "../../game_config";
import NavigationItem from "./NavigationItem/NavigationItem";
import more_menu_manager from "./MoreMenuManager";
import mode_manager from "../ModeDisplay/ModeManager";
import MoreMenu from "./MoreMenu";
import {
  PlayCircleFilled,
  FastRewindRounded,
  FastForward,
  Backspace,
  MoreVert,
  PauseCircleFilled
} from "@material-ui/icons";
import "./FixedBottomMenu.css";

class FixedBottomMenu extends Component {
  onRun = () => {
    gc.run();
  };

  onRewind = () => {
    if (mode_manager.modes.running) dialog_manager.openDialog("no_manual");
    else gc.rewind();
  };

  onClear = () => {
    dialog_manager.openDialog("clear");
  };

  onPause = () => {
    gc.pause();
  };

  onFastForward = () => {
    if (mode_manager.modes.running) dialog_manager.openDialog("no_manual");
    else gc.fastForward();
  };

  onMore = event => {
    more_menu_manager.toggle();
  };

  render() {
    return (
      <Paper className="menu">
        <Grid container>
          <NavigationItem
            displayTooltip={true}
            title="Start"
            onMenuItemClick={this.onRun}
          >
            <PlayCircleFilled className="icon" />
          </NavigationItem>
          <NavigationItem
            displayTooltip={true}
            title="Rewind"
            onMenuItemClick={this.onRewind}
          >
            <FastRewindRounded className="icon" />
          </NavigationItem>
          <NavigationItem
            displayTooltip={true}
            title="Step"
            onMenuItemClick={this.onFastForward}
          >
            <FastForward className="icon" />
          </NavigationItem>
          <NavigationItem
            displayTooltip={true}
            title="Pause"
            onMenuItemClick={this.onPause}
          >
            <PauseCircleFilled className="icon" />
          </NavigationItem>
          <NavigationItem
            displayTooltip={true}
            title="Clear Grid"
            onMenuItemClick={this.onClear}
          >
            <Backspace className="icon" />
          </NavigationItem>
          <NavigationItem
            displayTooltip={more_menu_manager.open}
            title="More"
            onMenuItemClick={this.onMore}
          >
            <MoreVert className="icon" />
            <MoreMenu />
          </NavigationItem>
        </Grid>
      </Paper>
    );
  }
}

export default FixedBottomMenu;

import React, { Component } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Help, Build, CloseRounded } from "@material-ui/icons";
import Tooltip from "@material-ui/core/Tooltip";
import more_menu_manager from "./MoreMenuManager";
import scene_manager from "../SceneManager";

import "./FixedBottomMenu.css";
class MoreMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: more_menu_manager.open
    };

    more_menu_manager.subscribe(this);
    this.handleOpenHelpScene = this.handleOpenHelpScene.bind(this);
    this.handleOpenSettingsScene = this.handleOpenSettingsScene.bind(this);
  }
  onMoreMenuChange() {
    this.setState({
      open: more_menu_manager.open
    });
  }

  handleOpenHelpScene() {
    scene_manager.setCurrentScene("help-scene");
  }
  handleOpenSettingsScene() {
    scene_manager.setCurrentScene("settings-scene");
  }

  render() {
    return (
      <Menu
        id="long-menu"
        keepMounted
        anchorEl={more_menu_manager.anchor}
        open={this.state.open}
      >
        <div className="inner-gradient-border">
          <Tooltip title="Help" placement="right">
            <MenuItem key="help" onClick={this.handleOpenHelpScene}>
              <Help />
            </MenuItem>
          </Tooltip>
          <Tooltip title="Settings" placement="right">
            <MenuItem key="settings" onClick={this.handleOpenSettingsScene}>
              <Build />
            </MenuItem>
          </Tooltip>
          <Tooltip title="Close" placement="right">
            <MenuItem key="settings">
              <CloseRounded />
            </MenuItem>
          </Tooltip>
        </div>
      </Menu>
    );
  }
}

export default MoreMenu;

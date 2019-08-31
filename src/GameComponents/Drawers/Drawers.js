import React, { Component } from "react";
import { ColorLens, DirectionsRun } from "@material-ui/icons";
import drawers_manager from "./DrawersManager";
import DrawerHandle from "./DrawerHandle";
import gc from "../../game_config";
import DrawerContent from "./DrawerContent";
import SpeedControl from "../SpeedControl/SpeedControl";
import ColorWheel from "../ColorWheel/ColorWheel";
import "./Drawers.css";

class Drawers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawers: drawers_manager.cloneDrawers()
    };
    drawers_manager.subscribe(this);
  }

  onDrawersChange() {
    this.setState({
      drawers: drawers_manager.cloneDrawers()
    });
  }

  onToggleDrawer = (open, drawer) => {
    if (!open)
      return () => {
        drawers_manager.openDrawer(drawer);
      };

    return () => {
      drawers_manager.closeDrawer(drawer);
    };
  };

  openColor = () => {
    gc.pause();
    this.onToggleDrawer(false, "color")();
  };

  makeSpeedDrawer = open => {
    if (!open) {
      return (
        <DrawerHandle onOpen={this.onToggleDrawer(false, "speed")}>
          <DirectionsRun />
        </DrawerHandle>
      );
    }

    return (
      <DrawerContent>
        <SpeedControl
          open={open}
          speed={this.props.speed}
          onClose={this.onToggleDrawer(true, "speed")}
        />
      </DrawerContent>
    );
  };

  makeColorDrawer = open => {
    if (!open) {
      return (
        <DrawerHandle className="color-drawer" onOpen={this.openColor}>
          <ColorLens />
        </DrawerHandle>
      );
    }
    return (
      <DrawerContent>
        <ColorWheel onClose={this.onToggleDrawer(true, "color")} />
      </DrawerContent>
    );
  };

  render() {
    return (
      <div className="drawers">
        <div className="drawer">
          {this.makeSpeedDrawer(this.state.drawers.speed)}
        </div>
        <div className="drawer">
          {this.makeColorDrawer(this.state.drawers.color)}
        </div>
      </div>
    );
  }
}

export default Drawers;

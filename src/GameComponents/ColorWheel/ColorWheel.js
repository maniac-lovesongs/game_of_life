import React, { Component } from "react";
import color_wheel from "./ColorWheelModel";
import gc from "../../game_config";
import { Grid } from "@material-ui/core";
import { CloseRounded } from "@material-ui/icons";
import { ChromePicker } from "react-color";
import "./ColorWheel.css";

class ColorWheel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      custom: color_wheel.use_custom_color
    };
    color_wheel.subscribe(this);
  }

  onColorWheelModelChange = () => {
    this.setState({
      custom: color_wheel.use_custom_color
    });
  };

  onToggleCustom = event => {
    color_wheel.setUseCustomColor(event.currentTarget.checked);
  };

  onClose = () => {
    gc.run();
    this.props.onClose();
  };

  render() {
    return (
      <div className="outer-wrapper gradient-border">
        <Grid container className="custom-color">
          <Grid item xs={10}>
            <h1>Custom Color Panel</h1>
          </Grid>
          <Grid item xs={2} className="upper-menu">
            <CloseRounded className="close-icon" onClick={this.onClose} />
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={10}>
              <label>Use custom colors</label>
            </Grid>
            <Grid item xs={2}>
              <input type="checkbox" onClick={this.onToggleCustom} />
            </Grid>
          </Grid>
          <Grid container item xs={12} />
          <Grid container item xs={12}>
            <ChromePicker />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ColorWheel;

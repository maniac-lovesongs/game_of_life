import React, { Component } from "react";
import { Grid, Tab } from "@material-ui/core";
import { Settings, Casino } from "@material-ui/icons";
import "./SettingsTabs.css";
class SettingsTabs extends Component {
  render() {
    return (
      <Grid className="gradient-border" container>
        <Tab label="Presets" icon={<Settings />} className="settings-tab" />
        <Tab label="Custom Rules" icon={<Casino />} className="settings-tab" />
      </Grid>
    );
  }
}
export default SettingsTabs;

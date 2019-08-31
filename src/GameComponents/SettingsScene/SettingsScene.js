import React, { Component } from "react";
import SettingsTabs from "./SettingsTabs";
import { Grid } from "@material-ui/core";
import BackToGame from "../BackToGame/BackToGame";
import PresetPreview from "../PresetPreview/PresetPreview";
import "./SettingsScene.css";

class SettingsScene extends Component {
  render() {
    return (
      <div className="settings-scene-content">
        <SettingsTabs />
        <div className="tab-panel">
          <Grid container>
            <Grid item xs={6}>
              ...
            </Grid>
            <Grid item xs={6}>
              <PresetPreview rows={8} cols={8} size={10} />
            </Grid>
          </Grid>
        </div>
        <BackToGame />
      </div>
    );
  }
}
export default SettingsScene;

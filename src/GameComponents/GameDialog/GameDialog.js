import React, { Component } from "react";
import { CloseRounded } from "@material-ui/icons";
import "./GameDialog.css";
import { Grid, Dialog, DialogTitle } from "@material-ui/core";

class GameDialog extends Component {
  handleOnClick = e => {
    this.props.onClose(this.props.id);
  };

  handleButtonClick = e => {
    this.props.onButtonClick(this.props.id);
  };

  render() {
    return (
      <Dialog id={this.props.id} open={this.props.open}>
        <Grid className="gradient-wrapper">
          <Grid container className="inner-wrapper">
            <Grid container item xs={12}>
              <Grid item xs={10}>
                <DialogTitle className="dialog-title">
                  {this.props.title}
                </DialogTitle>
              </Grid>
              <Grid item xs={2}>
                <CloseRounded
                  onClick={this.handleOnClick}
                  className="close-button"
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <div className="dialog-message">{this.props.children}</div>
            </Grid>
            <Grid item xs={12}>
              <div onClick={this.handleButtonClick} className="start-button">
                {this.props.submitValue}
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
    );
  }
}

export default GameDialog;

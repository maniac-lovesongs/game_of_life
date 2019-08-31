import React, { Component } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import "../FixedBottomMenu.css";
class NavigationItem extends Component {
  constructor(props) {
    super(props);
  }

  handleOnClick = e => {
    this.props.onMenuItemClick(e);
  };

  render() {
    if (this.props.displayTooltip) {
      return (
        <span className="nav-item">
          <Grid item xs={1}>
            <Tooltip title={this.props.title} placement="bottom">
              <Button
                onClick={this.handleOnClick}
                variant="contained"
                size="small"
                className="nav-button"
              >
                {this.props.children}
              </Button>
            </Tooltip>
          </Grid>
        </span>
      );
    } else {
      return (
        <span>
          <Grid item xs={1}>
            <Button
              onClick={this.handleOnClick}
              variant="contained"
              size="small"
              className="nav-button"
            >
              {this.props.children}
            </Button>
          </Grid>
        </span>
      );
    }
  }
}

export default NavigationItem;

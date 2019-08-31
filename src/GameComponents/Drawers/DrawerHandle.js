import React, { Component } from "react";

class DrawerHandler extends Component {
  handleOpen = () => {
    this.props.onOpen();
  };

  makeClasses = () => {
    const classes = ["drawer-handle", "tab", "gradient-border"];
    if (this.props.className !== undefined) classes.push(this.props.className);
    return classes.join(" ");
  };

  render() {
    return (
      <div className={this.makeClasses()} onClick={this.handleOpen}>
        <div className="inner-wrapper">{this.props.children}</div>
      </div>
    );
  }
}
export default DrawerHandler;

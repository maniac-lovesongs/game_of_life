import React, { Component } from "react";

class DrawerContent extends Component {
  handleOpen = () => {
    this.props.onOpen();
  };

  makeClasses = () => {
    const classes = ["drawer-content"];
    if (this.props.className !== undefined) classes.push(this.props.className);
    return classes.join(" ");
  };

  render() {
    return <div className={this.makeClasses()}>{this.props.children}</div>;
  }
}
export default DrawerContent;

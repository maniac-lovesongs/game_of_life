import React, { Component } from "react";
import ReactDOM from "react-dom";
import GameEntry from "./GameEntry";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GameEntry />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

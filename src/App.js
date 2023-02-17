import "./App.css";
import React, { Component } from "react";
import SitePage from "./pages/site/index.js";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <SitePage />
      </div>
    );
  }
}

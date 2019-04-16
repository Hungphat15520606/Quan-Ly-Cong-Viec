import React, { Component } from "react";
import { Root } from "./components/Root";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <Root/>
        </p>
      </div>
    );
  }
}

export default App;

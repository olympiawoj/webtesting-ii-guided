import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    greeting: "No greeting for you"
  };

  render() {
    return (
      <>
        <h2>Hello World</h2>
        <button onClick={this.greet}>Greet</button>
        <button onClick={this.bye}>Bye</button>
        <div>{this.state.greeting}</div>
      </>
    );
  }

  greet = () => {
    this.setState({ greeting: "Hello Web 17" });
  };

  bye = () => {
    this.setState({ greeting: "Bye Web 17" });
  };
}

export default App;

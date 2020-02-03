import React, { Component } from "react";
import MyName from "./MyName";
import Counter from "./Counter";
import logo from "./logo.svg";
import "./App.css";

export default class App extends Component {
  render() {
    const name = "Hello React!";
    const style = {
      fontSize: "2rem",
      padding: "0.5rem"
    };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* JSX (Javascript XML) */}
          <p style={style} className="App-msg">
            {name}
          </p>
          <MyName name="Junyoung" />
          <Counter />
        </header>
      </div>
    );
  }
}

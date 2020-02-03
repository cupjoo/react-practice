import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    number: 26
  };

  handleIncrease = () => {
    const { number } = this.state;
    this.setState({
      number: number + 1
    });
  };

  handleDecrease = () => {
    this.setState(({ number }) => ({
      number: number - 1
    }));
  };

  render() {
    const compStyle = {
      padding: "1rem"
    }
    const ageStyle = {
      paddingRight: "1rem"
    };
    const btnStyle = {
      color: "#282c34",
      backgroundColor: "#61dafb",
      fontSize: "1.2rem",
      width: "2rem",
      marginRight: ".2rem",
      border: "1px solid #61dafb",
      borderRadius: ".25rem"
    };
    return (
      <div style={compStyle}>
        <span style={ageStyle}>Age: {this.state.number}</span>
        <button style={btnStyle} onClick={this.handleIncrease}>
          +
        </button>
        <button style={btnStyle} onClick={this.handleDecrease}>
          -
        </button>
      </div>
    );
  }
}

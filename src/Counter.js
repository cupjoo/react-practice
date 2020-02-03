import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    number: 26
  };

  handleIncrease = () => {
    // 기존값을 참조해 값을 업데이트 할 시
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

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 5 의 배수라면 리렌더링 하지 않음
    console.log("shouldComponentUpdate");
    if (nextState.number % 5 === 0) return false;
    return true;
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  render() {
    console.log("render");

    const compStyle = {
      padding: "1rem"
    };
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
    if (this.state.error) return <h1>에러발생!</h1>;

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

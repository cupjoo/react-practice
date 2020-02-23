import React, { Component } from "react";

export default class PhoneForm extends Component {
  state = {
    name: "",
    phone: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value // 2. 값 변경 시 state.phone <- phone.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      name: '',
      phone: ''
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <input
          placeholder="전화번호"
          value={this.state.phone} // 1. phone.value <- state.phone (역은 성립 X)
          onChange={this.handleChange}
          name="phone"
        />
        <button type="submit">등록</button>
      </form>
    );
  }
}

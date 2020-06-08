import React, { Component } from "react";

export default class App extends Component {
  state = {
    count: 0,
    number: 1,
  };
  // 收集数据
  handleChange = (event) => {
    this.setState({
      number: +event.target.value,
    });
  };
  // 加
  increment = () => {
    const { count, number } = this.state;
    this.setState({
      count: count + number,
    });
  };
  // 减
  decrement = () => {
    const { count, number } = this.state;
    this.setState({
      count: count - number,
    });
  };
  // 奇数加
  incrementOdd = () => {
    const { count, number } = this.state;
    if (count & 1) {
      this.setState({
        count: count + number,
      });
    }
  };
  incrementAsync = () => {
    setTimeout(() => {
      const { count, number } = this.state;
      this.setState({
        count: count + number,
      });
    }, 1000);
  };
  render() {
    const { count } = this.state;
    return (
      <>
        <p>click {count} times</p>
        <select onChange={this.handleChange}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementOdd}>偶数 +</button>
        <button onClick={this.incrementAsync}>异步 +</button>
      </>
    );
  }
}

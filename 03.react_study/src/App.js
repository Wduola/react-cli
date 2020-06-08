import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement, incrementAsync } from "./redux/actions";

// 装饰器语法
@connect((state) => ({ count: state.count }), { increment, decrement, incrementAsync })
// UI组件（被包装组件）
class App extends Component {
  state = {
    number: 1,
  };
  handleChange = (event) => {
    this.setState({
      number: +event.target.value,
    });
  };
  // 加法
  increment = () => {
    const number = this.state.number;
    this.props.increment(number);
  };
  // 减法
  decrement = () => {
    const number = this.state.number;
    this.props.decrement(number);
  };
  // 奇数求和
  incrementIfOdd = () => {
    const { count } = this.props;
    // 判断如果是奇数执行
    if (count & 1) {
      const number = this.state.number;
      this.props.increment(number);
    }
  };
  // 异步去和
  incrementAsync = () => {
    const number = this.state.number;
    this.props.incrementAsync(number);
  };
  render() {
    const count = this.props.count;
    return (
      <div>
        <h1>redux 计算</h1>
        <p>click {count} times</p>
        <select onChange={this.handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>奇数求和</button>
        <button onClick={this.incrementAsync}>异步求和</button>
      </div>
    );
  }
}
export default App;

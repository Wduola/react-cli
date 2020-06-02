import React, { Component, Fragment } from "react";

// 引入context
import personContext from "./context.js";

export default class Son extends Component {
  // 子组件使用context
  static contextType = personContext;
  // 点击
  handleClick = () => {
    console.log(this.context);
  };
  render() {
    return (
      <>
        <h1 onClick={this.handleClick}>我是Son组件</h1>
        <personContext.Consumer>
          {(person) => {
            const { name, age } = person;
            return (
              <ul>
                <li>姓名：{name}</li>
                <li>年龄：{age}</li>
              </ul>
            );
          }}
        </personContext.Consumer>
      </>
    );
  }
}

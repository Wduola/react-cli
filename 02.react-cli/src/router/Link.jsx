// 自定义Link

import React, { Component } from "react";
import context from "./context";

export default class Link extends Component {
  static contextType = context;

  handleClick = (event) => {
    // 禁止浏览器默认行为
    event.preventDefault();
    // 跳转地址
    this.context.history.push(this.props.to);
  };

  render() {
    return <a onClick={this.handleClick}>{this.props.children}</a>;
  }
}

import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.css";

export default class Header extends Component {
  // 对props属性进行类型限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };
  state = {
    name: "",
  };

  // 添加todo
  handleChange = (event) => {
    this.setState({
      name: event.target.value.trim(),
    });
  };

  // 键盘提交事件
  handleKeyup = (event) => {
    const { name } = this.state;
    // 判断是回车事件和name不为空时添加
    if (event.keyCode === 13 && name) {
      this.props.addTodo(name);
      // 清空数据
      this.setState({
        name: "",
      });
    }
  };

  render() {
    return (
      <div className="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" onChange={this.handleChange} onKeyUp={this.handleKeyup} />
      </div>
    );
  }
}

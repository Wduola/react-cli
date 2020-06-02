import React, { Component } from "react";

export default function withForm(title) {
  return function (WrappedComponent) {
    // 返回一个新组件
    return class extends Component {
      // 给高阶组件命名
      static displayName = `From(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;
      // 收集数据 高阶函数
      handleChange = (key) => {
        return (event) => {
          this.setState({
            [key]: event.target.value.trim(),
          });
        };
      };
      // 点击提交事件
      handleSubmit = (event) => {
        // 取消表单的默认行为
        event.preventDefault();
        console.log(this.state);
      };

      render() {
        return (
          <>
            <h1>{title}</h1>
            <WrappedComponent handleChange={this.handleChange} handleSubmit={this.handleSubmit} />;
          </>
        );
      }
    };
  };
}

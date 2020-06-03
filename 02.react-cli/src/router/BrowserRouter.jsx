// BrowserRouter 自定义实现功能

import React, { Component } from "react";
import { createBrowserHistory } from "history";
// 数据来源Context
import context from "./context";

// 创建history 对象
const history = createBrowserHistory();

export default class BrowserRouter extends Component {
  state = {
    location: history.location,
  };

  componentDidMount() {
    // 返回值是解绑事件的方法
    this.unlisten = history.listen((location) => {
      // 更新当前组件
      this.setState({ location });
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    return (
      // 给后代组件传递路由组件的三大属性
      <context.Provider value={{ history, location: this.state.location, match: {} }}>{this.props.children}</context.Provider>
    );
  }
}

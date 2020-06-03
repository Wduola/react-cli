// 自定义Route

import React, { Component } from "react";
import { matchPath } from "react-router";

import context from "./context";

export default class Route extends Component {
  render() {
    return (
      <context.Consumer>
        {(context) => {
          // 根据pathname的变化，看是否匹配path
          const { pathname } = context.location; //当前路径
          // 检查当前路径是都匹配path
          const match = matchPath(pathname, this.props);
          if (!match) return null;
          return React.createElement(this.props.component, context);
        }}
      </context.Consumer>
    );
  }
}

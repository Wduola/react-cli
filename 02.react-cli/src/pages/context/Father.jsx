import React, { Component, Fragment } from "react";

// 引入子组件
import Son from "../context/Son";
// 引入context
import personContext from "./context.js";

export default class Father extends Component {
  static contextType = personContext;
  render() {
    return (
      <Fragment>
        <h1>Father组件····</h1>
        <Son />
      </Fragment>
    );
  }
}

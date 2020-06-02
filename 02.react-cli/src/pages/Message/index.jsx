import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

// 引入组件
import Detail from "../Detail";

export default class Message extends Component {
  // 编程式导航
  push = () => {
    this.props.history.push("/home/message/4", { name: "wbh" });
  };
  replace = () => {
    this.props.history.replace("/home/message/4", { name: "wbh" });
  };
  goForward = () => {
    this.props.history.goForward();
  };
  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <ul>
              <li>
                <Link to="/home/message/1">message001</Link> &nbsp;&nbsp;
                <button onClick={this.push}>push</button> &nbsp;
                <button onClick={this.replace}>replace</button>
              </li>
              <li>
                <Link to="/home/message/2">message002</Link> &nbsp;&nbsp;
                <button onClick={this.push}>push</button> &nbsp;
                <button onClick={this.replace}>replace</button>
              </li>
              <li>
                <Link to="/home/message/4">message004</Link> &nbsp;&nbsp;
                <button onClick={this.push}>push</button> &nbsp;
                <button onClick={this.replace}>replace</button>
              </li>
            </ul>
            <button onClick={this.goForward}>前进</button>
            <button onClick={this.goBack}>后退</button>
            <Route path="/home/message/:id" component={Detail} />
          </div>
        </div>
      </div>
    );
  }
}

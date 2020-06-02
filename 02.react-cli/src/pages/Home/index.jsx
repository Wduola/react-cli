import React, { Component } from "react";
import { Link, NavLink, Switch, Redirect, Route } from "react-router-dom";

// 引入组件
import News from "../News";
import Message from "../Message";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <NavLink to="/home/news">News</NavLink>
            </li>
            <li>
              <NavLink to="/home/message" className="myActive">
                Message
              </NavLink>
            </li>
          </ul>
          <Switch>
            <Route path="/home/message" component={Message} />
            <Route path="/home/News" component={News} />
            <Redirect to="/home/news" />
          </Switch>
        </div>
      </div>
    );
  }
}

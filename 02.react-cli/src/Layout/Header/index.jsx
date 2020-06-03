import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";

import routes from "../../config/routes";
import "./index.css";

// 使用修饰器语法
@withRouter
export default class Header extends Component {
  // 找到子菜单
  renderChildren = () => {
    // 1. 获取当前路径location.pathname
    const { pathname } = this.props.location;
    // 2. 判断routes中哪个配置匹配上当前路径
    for (let i = 0; i < routes.length; i++) {
      const route = routes[i];
      // 判断当前数据是否和一级菜单一致
      if (pathname.startsWith(route.path)) {
        // 3. 取出route.children属性，将属性中配置遍历生成二级导航链接
        return route.children || [];
      }
    }
    return [];
  };

  render() {
    const routeChildren = this.renderChildren();

    return (
      <div className="main-header-box" style={{ height: "125px" }}>
        <header className="main-header main-header unauthorized visible">
          <div className="container">
            <a href="/" className="logo">
              <img src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt="掘金" className="logo-img" />
            </a>
            <nav className="main-nav">
              {/* 一级菜单 */}
              <ul className="phone-hide">
                {routes.map((route) => {
                  return (
                    <li className="nav-item link-item route-active" key={route.path}>
                      <NavLink to={route.path}>{route.name}</NavLink>
                    </li>
                  );
                })}
              </ul>
              {/* 二级菜单 */}
              <ul className="phone-hide">
                {routeChildren.map((route) => {
                  return (
                    <li className="nav-item link-item route-active" key={route.path}>
                      <NavLink to={route.path}>{route.name}</NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}

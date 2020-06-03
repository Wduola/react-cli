import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "../../config/routes";

export default class Content extends Component {
  renderRoutes = () => {
    const renderRoutes = [];
    routes.forEach((route) => {
      // 添加到一级路由
      renderRoutes.push(<Route path={route.path} key={route.path} component={route.component} exact />);
      if (route.children) {
        route.children.forEach((childRoute) => {
          // 添加子路由
          renderRoutes.push(<Route path={childRoute.path} key={childRoute.path} component={childRoute.component} exact />);
        });
      }
    });
    return renderRoutes;
  };
  render() {
    return (
      <div style={{ width: "1000px", margin: "0 auto" }}>
        <Switch>{this.renderRoutes()}</Switch>
      </div>
    );
  }
}

/*
 应用主组件
*/
import React from "react";

// 子组件
import Login from "./pages/HOC/Login";
import Register from "./pages/HOC/Register";

// 定义ES6类组件，组件名App
class App extends React.Component {
  render() {
    return (
      <>
        <Login />
        <Register />
      </>
    );
  }
}

// 暴露组件语法
export default App;

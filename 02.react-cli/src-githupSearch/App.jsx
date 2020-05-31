/*
 应用主组件
*/
import React from "react";

// 子组件
import Header from "./pages/Header";
import List from "./pages/List";

// 定义ES6类组件，组件名App
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <List />
      </div>
    );
  }
}

// 暴露组件语法
export default App;

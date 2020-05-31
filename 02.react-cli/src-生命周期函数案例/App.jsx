/*
 应用主组件
*/
import React from "react";

import Child from "./Child";

// 定义ES6类组件，组件名App
class App extends React.Component {
  // 1------------------------------构造器函数
  constructor() {
    super(); // 调用父类的构造函数
    console.log("App--- constructor()");
  }
  // 2.---------------------------组件准备挂载
  componentDidMount() {
    console.log("App---componentDidMount()");
  }
  // 3.--------------------------组件将要挂载
  componentWillMount() {
    console.log("App---componentWillMount()");
  }
  // 4.---------------------------组件将要接收属性
  componentWillReceiveProps() {
    console.log("App---componentWillReceiveProps");
  }
  // 5.----------------------------应该组件更新
  shouldComponentUpdate() {
    console.log("App---shouldComponentUpdate");
    // 专门做新能优化
    return true; //重新渲染
  }
  // 6.---------------------------组件将要更新
  componentWillUpdate() {
    console.log("App--componentWillUpdate");
  }
  // 7.------------------------------组件更新
  componentDidUpdate() {
    console.log("App---componentDidUpdate");
  }
  // 8------------------------------组件将要卸载
  componentWillUnmount() {
    console.log("App---componentWillUnmount");
  }
  render() {
    return (
      <div
        onClick={() => {
          this.setState({});
        }}
      >
        <h1>React生命周期函数</h1>
        <Child />
      </div>
    );
  }
}

// 暴露组件语法
export default App;

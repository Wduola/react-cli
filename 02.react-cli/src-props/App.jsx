/*
 应用主组件
*/
import React from "react";

// 引入其他组件
import Child from "./pages/Child";

// 定义ES6类组件，组件名App
class App extends React.Component {
  // 初始化状态
  state = {
    person: {
      name: "王宝红",
      age: 19,
      sex: "女",
    },
  };
  // 更新person状态
  updatePerson = (person) => {
    this.setState({
      person,
    });
  };
  render() {
    // 读取状态
    const { person } = this.state;
    return (
      <div>
        <Child {...person} updatePerson={this.updatePerson} />
      </div>
    );
  }
}

// 暴露组件语法
export default App;

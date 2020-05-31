/*
 应用主组件
*/
import React from "react";
// 子组件
import Header from "./pages/Header";
import List from "./pages/List";
import Footer from "./pages/Footer";

// 定义ES6类组件，组件名App
class App extends React.Component {
  state = {
    todos: [
      { id: 1, name: "吃饭", isCompleted: false },
      { id: 2, name: "睡觉", isCompleted: false },
    ],
  };

  id = 3;

  // Header组件中添加todo方法
  addTodo = (name) => {
    // 获取之前的数据
    const { todos } = this.state;
    // 更新添加后的数据
    this.setState({
      // ...todos   打包之前的数据
      todos: [{ id: this.id++, name, isCompleted: false }, ...todos],
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} />
          <Footer />
        </div>
      </div>
    );
  }
}

// 暴露组件语法
export default App;

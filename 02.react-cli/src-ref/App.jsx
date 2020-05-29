/*
 应用主组件
*/
import React from "react";

// 定义ES6类组件，组件名App
class App extends React.Component {
  // 给实例对象添加属性
  inputRef = React.createRef();
  // 点击事件
  handleClick = () => {
    const value = this.inputRef.current.value.trim();
    alert(value);
  };
  // 失去焦点事件
  handleBlur = (event) => {
    alert(event.target.value.trim());
  };
  render() {
    return (
      <div>
        <input type="text" placeholder="请输入" ref={this.inputRef} />
        <button onClick={this.handleClick}>点击提示输入数据</button>
        <input type="text" placeholder="失去焦点提示" onBlur={this.handleBlur} />
      </div>
    );
  }
}

// 暴露组件语法
export default App;

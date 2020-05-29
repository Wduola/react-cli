/*
 应用主组件
*/
import React from "react";

// 引入其他组件

// 定义ES6类组件，组件名App
class App extends React.Component {
  state = {
    isLikeMe: false,
  };
  handleClick = () => {
    // 读取状态
    const { isLikeMe } = this.state;
    // 更新状态
    this.setState({
      isLikeMe: !isLikeMe,
    });
  };
  render() {
    // 读取state
    const { isLikeMe } = this.state;
    return (
      <div>
        <h1 onClick={this.handleClick}>{isLikeMe ? "我爱你" : "你爱我"}</h1>
      </div>
    );
  }
}

// 暴露组件语法
export default App;

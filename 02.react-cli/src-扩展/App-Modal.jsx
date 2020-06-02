/*
 应用主组件
*/
import React from "react";

// 子组件
import Modal from "./pages/Modal";
// 定义ES6类组件，组件名App
class App extends React.Component {
  // 设置初始装填state
  state = {
    visible: false,
  };
  // 点击按钮显示
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  // 点击按钮消失
  hiddenModal = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <>
        <button onClick={this.showModal}>点击显示</button>
        <Modal visible={this.state.visible} onCancel={this.hiddenModal} title={<span>我的标题</span>} content={<p>我的内容：今天是个暴雨天····</p>} />
      </>
    );
  }
}

// 暴露组件语法
export default App;

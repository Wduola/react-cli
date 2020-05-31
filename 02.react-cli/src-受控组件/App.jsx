/*
 应用主组件
*/
import React from "react";

// 定义ES6类组件，组件名App
class App extends React.Component {
  state = {
    username: "",
    password: "",
  };
  login = (event) => {
    // 禁止浏览器默认行为
    event.preventDefault();
    // 收集表单数据
    const { username, password } = this.state;
    console.log(username, password);
    // 清空数据
    this.setState({
      username: "",
      password: "",
    });
  };
  handleChange = (key) => {
    return (event) => {
      this.setState({
        [key]: event.target.value.trim(),
      });
    };
  };
  render() {
    const { username, password } = this.state;
    return (
      <form onSubmit={this.login}>
        用户名：
        <input type="text" onChange={this.handleChange("username")} value={username} />
        密码：
        <input type="text" onChange={this.handleChange("password")} value={password} />
        <button type="submit">登录</button>
      </form>
    );
  }
}

// 暴露组件语法
export default App;

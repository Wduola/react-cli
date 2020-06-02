import React, { Component } from "react";
// 引入高阶组件
import withForm from "./withForm";

@withForm("登陆组件")
class Login extends Component {
  // 设置初始状态值
  // state = {
  //   username: "",
  //   password: "",
  // };
  // // 收集数据 高阶函数
  // handleChange = (key) => {
  //   return (event) => {
  //     this.setState({
  //       [key]: event.target.value.trim(),
  //     });
  //   };
  // };
  // // 点击提交事件
  // handleSubmit = (event) => {
  //   // 取消表单的默认行为
  //   event.preventDefault();
  //   console.log("登陆", this.state);
  // };
  render() {
    // 接收withForm的props
    const { handleChange, handleSubmit } = this.props;
    return (
      <>
        <form onSubmit={handleSubmit}>
          用户名 ：
          <input type="text" onChange={handleChange("username")} />
          <br />
          密 码 ：
          <input type="password" onChange={handleChange("password")} />
          <br />
          <button type="submit">登录</button>
        </form>
      </>
    );
  }
}

export default Login;

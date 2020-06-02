import React, { Component } from "react";
// 引入高阶组件
import withForm from "./withForm";

@withForm("注册组件")
class Refister extends Component {
  // // 设置初始状态数据
  // state = {
  //   username: "",
  //   password: "",
  //   password2: "",
  // };
  // // 收集数据
  // handleChange = (key) => {
  //   return (event) => {
  //     this.setState({
  //       [key]: event.target.value.trim(),
  //     });
  //   };
  // };
  // // 提交事件
  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("注册：", this.state);
  // };
  render() {
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
          确认密码：
          <input type="password" onChange={handleChange("password2")} />
          <br />
          <button>注册</button>
        </form>
      </>
    );
  }
}

export default Refister;

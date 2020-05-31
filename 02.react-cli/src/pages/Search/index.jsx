import React, { Component } from "react";
import PubSub from "pubsub-js";

export default class Search extends Component {
  state = {
    searchName: "",
  };
  // input输入数据收集
  handleChange = (event) => {
    // 更新数据
    this.setState({
      searchName: event.target.value.trim(),
    });
  };
  // 搜索回调
  handleClick = () => {
    // 读取state
    const { searchName } = this.state;
    if (searchName) {
      // 发布消息
      PubSub.publish("SEARCHNAME", searchName);
    }
  };
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" onChange={this.handleChange} />
          <button onClick={this.handleClick}>Search</button>
        </div>
      </section>
    );
  }
}

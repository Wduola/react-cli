import React, { Component } from "react";
import PubSub from "pubsub-js"; //引入订阅消息模块
import axios from "axios";
import "./index.css";

export default class List extends Component {
  // 四种状态
  state = {
    isFirstView: true, //是否初始化
    isLoading: false, //是否请求中
    users: null, //获取数据
    error: null, //请求数据失败原因
  };
  // 订阅消息
  componentDidMount() {
    PubSub.subscribe("SEARCHNAME", (msg, searchName) => {
      console.log("订阅消息");
      // 发送请求前切换成loading
      this.setState({
        isFirstView: false, //是否初始化
        isLoading: true, //是否请求中
      });
      // 发ajax请求获取数据
      axios
        .get("http://localhost:9527/api/search/users", {
          params: {
            q: searchName,
          },
        })
        .then((response) => {
          console.log("请求成功");
          // 更新数据
          this.setState({
            users: response.data.items.map((user) => {
              return {
                login: user.login,
                avatar_url: user.avatar_url,
                html_url: user.html_url,
                id: user.id,
              };
            }),
            isLoading: false,
          });
        })
        .catch((error) => {
          console.log("请求失败", error);
          this.setState({
            users: null,
            error: "啊哈哈哈哈----githup不让你访问了",
            isLoading: false,
          });
        });
    });
  }
  // 取消订阅，避免不必要的内存溢出
  componentWillUnmount() {
    PubSub.unsubscribe("SEARCHNAME");
  }
  render() {
    const { isFirstView, isLoading, users, error } = this.state;
    // 判断
    if (isFirstView) {
      return <h1>请搜索数据</h1>;
    }
    if (isLoading) {
      return <h1>Loading.....</h1>;
    }
    if (users) {
      return (
        <div className="row">
          {users.map((user) => {
            return (
              <div className="card" key={user.id}>
                <a href={user.html_url} target="_blank">
                  <img src={user.avatar_url} style={{ width: "100px" }} />
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            );
          })}
        </div>
      );
    }
    return <h1>{error}</h1>;
  }
}

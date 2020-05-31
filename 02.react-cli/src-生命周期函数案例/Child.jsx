import React, { Component } from "react";

import ReactDOM from "react-dom";

export default class Child extends Component {
  state = {
    opacity: 1,
  };
  componentDidMount() {
    this.timed = setInterval(() => {
      let { opacity } = this.state;
      opacity -= 0.1;
      if (opacity <= 0) opacity = 1;
      this.setState({
        opacity,
      });
    }, 1000 / 60);
  }
  componentWillUnmount() {
    clearInterval(this.timed);
  }
  // 点击消失
  goDie = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  };
  render() {
    const { opacity } = this.state;
    return (
      <div>
        <h1 style={{ opacity }}>React学不会怎么办？</h1>
        <button onClick={this.goDie}>必须死</button>
      </div>
    );
  }
}

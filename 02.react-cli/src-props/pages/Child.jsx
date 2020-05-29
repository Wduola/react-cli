import React, { Component } from "react";
import PropTypes from "prop-types"; //检查props类型的库

export default class Child extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.string,
    updatePerson: PropTypes.func.isRequired,
  };
  update = () => {
    this.props.updatePerson({
      name: "jack",
      age: 20,
      sex: "男",
    });
  };
  // 给props默认值
  static defaultProps = {
    age: 0,
    sex: "男",
  };

  render() {
    // 读取props
    const { name, age, sex } = this.props;
    return (
      <div>
        <h2 onClick={this.update}>Child组件</h2>
        <ul>
          <li>姓名: {name}</li>
          <li>年龄: {age}</li>
          <li>性别: {sex}</li>
        </ul>
      </div>
    );
  }
}

import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

export default class Item extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
  };
  render() {
    const { name } = this.props.todo;
    return (
      <li>
        <label>
          <input type="checkbox" />
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{ display: "none" }}>
          删除
        </button>
      </li>
    );
  }
}

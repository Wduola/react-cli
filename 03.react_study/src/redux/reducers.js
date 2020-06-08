// 根据prevState和action来生成newState的函数模块
// reducers 就是一个函数，函数名称一般和要管理的状态数据名称一致

import { combineReducers } from "redux";
import { INCREMENT, DECREMENT } from "./constants";

// 初始化值
const initCount = 0;

function count(prevState = initCount, action) {
  // 内部计算得到newState
  switch (action.type) {
    case INCREMENT:
      return prevState + action.data;
    case DECREMENT:
      return prevState - action.data;
    default:
      return prevState;
  }
}
// 暴露
export default combineReducers({ count });

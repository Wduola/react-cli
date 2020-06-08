// 根据prevState和action来生成newState的函数模块
// reducers就是一个函数，函数名称一般和要管理状态数据名称一致

// 引入常量
import { INCREMENT, DECREMENT } from "./constants";

// 计算得到新状态 prevState 代表之前的state
function count(prevState, action) {
  // 内部计算得到newState
  switch (action.type) {
    // 加法
    case INCREMENT:
      return prevState + action.type;
    // 减法
    case DECREMENT:
      return prevState - action.type;
    // 默认
    default:
      return prevState;
  }
}

// 暴露数据
export default count;

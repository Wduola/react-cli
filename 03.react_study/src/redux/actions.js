// redux-thunk 中间件
// 将action creators分为同步action creators和异步action creators

import { INCREMENT, DECREMENT } from "./constants";

export const increment = (number) => ({
  type: INCREMENT, //更新类型
  data: number, //参与更新的数据
});

export const decrement = (number) => ({
  type: DECREMENT,
  data: number,
});

export const incrementAsync = (number) => {
  return (dispatch) => {
    // 执行异步代码
    setTimeout(() => {
      const action = increment(number);
      dispatch(action);
    }, 1000);
  };
};

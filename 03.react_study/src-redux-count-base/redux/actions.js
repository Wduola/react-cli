// 用来创建action对象工厂函数模块
// action对象：{type: 更新类型, data: 参与更新的数据}

// 引入常量
import { INCREMENT, DECREMENT } from "./constants";

// 加法  因为data的值不确定，所以传形参
export const increment = (number) => {
  return {
    type: INCREMENT,
    data: number,
  };
};

// 减法
export const decrement = (number) => ({
  type: DECREMENT,
  data: number,
});

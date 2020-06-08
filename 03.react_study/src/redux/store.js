// 创建store 对象
// store管理的状态数据是哪些？
//       看reducers函数的返回值 --> 就是store管理的状态数据

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";
/*
  区分开发环境和上线(生产)环境：
    process.env.NODE_ENV 
      npm start     --> development 
      npm run build --> production
*/
const middleware = applyMiddleware(thunk);
// 创建store 对象
const store = createStore(
  reducers,
  // 应用上中间件
  process.env.NODE_ENV === "development" ? composeWithDevTools(middleware) : middleware
);
// 暴露出去
export default store;

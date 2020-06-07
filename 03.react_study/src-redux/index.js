import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from "./redux/store";

ReactDOM.render(
  // Provider:负责给后台组件传递store对象
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// // 重新渲染组件
// store.subscribe(render);

// // 初始化渲染
// render();

// function render() {
//   ReactDOM.render(<App />, document.getElementById("root"));
// }

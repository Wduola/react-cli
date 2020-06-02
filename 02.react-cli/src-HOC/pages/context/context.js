import React from "react";

// 创建context
const personContext = React.createContext({ name: "王宝红", age: 18 });

// 默认暴露出去
export default personContext;

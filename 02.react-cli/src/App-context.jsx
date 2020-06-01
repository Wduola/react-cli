/*
 应用主组件
*/
import React from "react";
// import FragmentDemo from "./pages/Fragment";

// 子组件
import Father from "./pages/context/Father";
// 引入context
import personContext from "./pages/context/context.js";

// 定义ES6类组件，组件名App
class App extends React.Component {
  state = {
    person: {
      name: "何勇",
      age: 19,
    },
  };
  render() {
    return (
      <>
        <personContext.Provider value={this.state.person}>
          <Father />
        </personContext.Provider>
      </>
    );
  }
}

// 暴露组件语法
export default App;

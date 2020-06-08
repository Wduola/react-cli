const { override, fixBabelImports, addLessLoader, addDecoratorsLegacy } = require("customize-cra");

module.exports = override(
  // 按需加载样式
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  // 自定义主题
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      // antd颜色变量文档
      // https://3x.ant.design/docs/react/customize-theme-cn#Ant-Design-%E7%9A%84%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F
      modifyVars: { "@primary-color": "#1DA57A" }, // 修改antd主题色
    },
  }),
  // 添加babel插件 - 支持装饰器语法
  // yarn add @babel/plugin-proposal-decorators --dev
  addDecoratorsLegacy()
);

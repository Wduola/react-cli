// 所有的路由配置
import Home from "../pages/Home";
import Backend from "../pages/Home/components/Backend";
import Frontend from "../pages/Home/components/Frontend";
import Ios from "../pages/Home/components/Ios";
import Android from "../pages/Home/components/Android";
import Pins from "../pages/Pins";
import Following from "../pages/Pins/components/Following";
import Hot from "../pages/Pins/components/Hot";
import Events from "../pages/Events";
import Beijing from "../pages/Events/components/Beijing";
import Guangzhou from "../pages/Events/components/Guangzhou";
import Hangzhou from "../pages/Events/components/Hangzhou";
import Shanghai from "../pages/Events/components/Shanghai";
import Shenzhen from "../pages/Events/components/Shenzhen";
import Books from "../pages/Books";
import General from "../pages/Books/components/General";
import BlockChain from "../pages/Books/components/BlockChain";
import Mobile from "../pages/Books/components/Mobile";

const routes = [
  {
    path: "/home",
    name: "首页",
    component: Home,
    children: [
      {
        path: "/home/frontend",
        name: "前端",
        component: Frontend,
      },
      {
        path: "/home/backend",
        name: "后端",
        component: Backend,
      },
      {
        path: "/home/android",
        name: "Android",
        component: Android,
      },
      {
        path: "/home/ios",
        name: "iOS",
        component: Ios,
      },
    ],
  },
  {
    path: "/pins",
    name: "沸点",
    component: Pins,
    children: [
      {
        path: "/pins/hot",
        name: "热门",
        component: Hot,
      },
      {
        path: "/pins/following",
        name: "关注",
        component: Following,
      },
    ],
  },
  {
    path: "/books",
    name: "小册",
    component: Books,
    children: [
      {
        path: "/books/general",
        name: "通用",
        component: General,
      },
      {
        path: "/books/blockchain",
        name: "区块链",
        component: BlockChain,
      },
      {
        path: "/books/mobile",
        name: "移动开发",
        component: Mobile,
      },
    ],
  },
  {
    path: "/events",
    name: "活动",
    component: Events,
    children: [
      {
        path: "/events/beijing",
        name: "北京",
        component: Beijing,
      },
      {
        path: "/events/shanghai",
        name: "上海",
        component: Shanghai,
      },
      {
        path: "/events/guangzhou",
        name: "广州",
        component: Guangzhou,
      },
      {
        path: "/events/shenzhen",
        name: "深圳",
        component: Shenzhen,
      },
      {
        path: "/events/hangzhou",
        name: "杭州",
        component: Hangzhou,
      },
    ],
  },
];

export default routes;

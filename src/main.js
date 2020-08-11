import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// 导入Vant组件库
import Vant from "vant";
// 导入Vant全局样式
import "vant/lib/index.css";

// 导入全局样式
import "./style/index.scss";

// 动态适配REM的基准值(html标签字体大小)
import "amfe-flexible";

// 注册Vant总组件
Vue.use(Vant);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

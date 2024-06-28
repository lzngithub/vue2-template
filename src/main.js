import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import * as api from "./request/api";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./mock";

Vue.use(ElementUI, { size: "small", zIndex: 3000 });
Vue.prototype.$api = api;

// eslint-disable-next-line no-new
new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});

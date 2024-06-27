import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";

Vue.use(ElementUI, { size: "small", zIndex: 3000 });

// eslint-disable-next-line no-new
new Vue({
  el: "#app",
  render: (h) => h(App),
});

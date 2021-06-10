import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import "./utils/antd";
import { Button, Tree } from "ant-design-vue";
Vue.component(Button.name, Button);
Vue.component(Tree.name, Tree);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

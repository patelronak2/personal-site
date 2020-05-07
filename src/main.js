import Vue from "vue";
import App from "./App";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueTypedJs from "vue-typed-js";
import { KinesisContainer, KinesisElement } from "vue-kinesis";

Vue.use(VueTypedJs);

Vue.config.productionTip = false;
Vue.component("kinesis-container", KinesisContainer);
Vue.component("kinesis-element", KinesisElement);
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import VModal from "vue-js-modal";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

library.add(faUserSecret);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

//import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(VModal, { dialog: true });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

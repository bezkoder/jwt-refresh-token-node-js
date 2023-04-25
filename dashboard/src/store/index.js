import Vue from "vue";
import Vuex from "vuex";

import users from "./users";
import auth from "./auth";
import institutions from "./institution";
import misc from "./misc";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users,
    auth,
    institutions,
    misc,
  },
});

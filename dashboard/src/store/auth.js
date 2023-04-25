import axios from "axios";

const state = {
  isLoggedIn: true,
};

const getters = {
  isLoggedIn(state) {
    return state.isLoggedIn;
  },
};

const actions = {};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};

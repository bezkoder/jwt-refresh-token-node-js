import axios from "axios";

const state = {
  isLoggedIn: false,
  loggedinUser: {},
};

const getters = {
  isLoggedIn(state) {
    return state.isLoggedIn;
  },
  currentLoggedInUsername(state) {
    return state.loggedinUser.name;
  },
  refreshToken(state) {
    console.log("Refresh token ", state.loggedinUser.refreshToken);
    return state.loggedinUser.refreshToken;
  },
};

const actions = {
  setCurrentLoggedInUser({ commit }, data) {
    commit("updateLoggedInUser", data);
    commit("setLoggedInUser");
  },
  updateTokens({ commit }, data) {
    commit("updateTokens", data);
  },
  logout({ commit }) {
    commit("updateLoggedInUser", {});
    commit("resetLoggedInUser");
  },
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  updateLoggedInUser(state, data) {
    state.loggedinUser = data;
    state.isLoggedIn = true;
  },
  setLoggedInUser(state) {
    state.isLoggedIn = true;
  },
  resetLoggedInUser(state) {
    state.isLoggedIn = false;
  },
  updateTokens(state, data) {
    state.loggedinUser.accessToken = data.accessToken;
    state.loggedinUser.refreshToken = data.refreshToken;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

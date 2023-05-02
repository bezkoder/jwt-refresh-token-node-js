import axios from "axios";

const state = {
  users: [],
  roles: [],
};

const getters = {
  users(state) {
    return state.users;
  },
  roles(state) {
    return state.roles;
  },
};

const actions = {
  getAllUsers({ commit }) {
    axios.get("/api/users").then((response) => {
      console.log(response);
    });
  },
  getRoles({ commit }) {
    axios.get("/api/roles").then((response) => {
      commit("updateRoles", response.data.data);
    });
  },
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  updateUsers(state, list) {
    state.users = list;
  },
  updateRoles(state, list) {
    state.roles = list;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

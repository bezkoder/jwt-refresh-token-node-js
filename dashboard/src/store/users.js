import axios from "axios";

const state = {
  users: [],
};

const getters = {
  users(state) {
    return state.users;
  },
};

const actions = {
  getAllUsers({ commit }) {
    axios.get("/api/users").then((response) => {
      console.log(response);
    });
  },
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  updateUsers(state, list) {
    state.users = list;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

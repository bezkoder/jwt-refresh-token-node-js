import axios from "axios";

const state = {
  institutions: [],
};

const getters = {
  institutions(state) {
    return state.institutions;
  },
};

const actions = {
  getAllinstitutions({ commit }) {
    axios.get("/api/institution/").then((response) => {
      console.log(response);
      commit("updateInstitutions", response.data.message);
    });
  },
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  updateInstitutions(state, list) {
    state.institutions = list;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

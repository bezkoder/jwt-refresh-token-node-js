const state = {
  selectedMenu: "home",
};

const getters = {
  getSelection: (state) => {
    return state.selectedMenu;
  },
};

const actions = {
  setSelection({ commit }, item) {
    commit("setSelection", item);
  },
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  setSelection(state, item) {
    state.selectedMenu = item;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hamburger: false,
  },
  mutations: {
    changeHamburger(state) {
      state.hamburger = !state.hamburger;
    },
  },
  actions: {
  },
  modules: {
  },
});

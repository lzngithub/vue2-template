import Vuex from "vuex";
import Vue from "vue";
import car from "./car";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 1,
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
  mutations: {
    increment(state, payload) {
      // eslint-disable-next-line no-param-reassign
      state.count += payload.count;
    },
  },
  actions: {
    increment(context) {
      setTimeout(() => {
        context.commit("increment");
      }, 1000);
    },
  },
  modules: {
    car,
  },
});

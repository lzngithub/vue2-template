export default {
  namespaced: true,
  state: {
    count: 2,
  },
  mutations: {
    increment(state) {
      // eslint-disable-next-line no-param-reassign
      state.count += 1;
    },
  },
};

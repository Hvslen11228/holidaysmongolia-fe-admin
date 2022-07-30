import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    number: 0,
    user: [],
    token: null,
  },
  mutations: {
    user(state, user) {
      state.user = user;
    },
    token(state, token) {
      state.token = token;
    },
    number_set(state, payload) {
      state.number = payload;
    },
  },
  actions: {
    user(context, user) {
      context.commit("user", user);
    },
    token(context, token) {
      context.commit("token", token);
    },
    async setChange_1(state) {
      state.commit("number_set", 1);
    },
    async setChange_2(state) {
      state.commit("number_set", 2);
    },
    async setChange_3(state) {
      state.commit("number_set", 3);
    },
    async setChange_0(state) {
      state.commit("number_set", 0);
    },
  },
  modules: {},
  getters: {
    user: (state) => state.user,
    token: (state) => state.token,
    navbar_number: (state) => state.number,
  },
});

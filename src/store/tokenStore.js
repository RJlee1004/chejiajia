import Vue from "vue";
import vuex from "vuex";
Vue.use(vuex);
export default new vuex.Store({
  state: {
    token: ""
  },
  mutations: {
    updateToken(state, token) {
      state.token = token;
    }
  }
});

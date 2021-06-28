import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    active: 0,
    sum: 0
  },
  mutations: {
    setActive(state, newValue) {
      state.active = newValue;
    },
    setSum(state, newValue) {
      state.sum = newValue;
    }
  },
  getters: {
    getActive(state) {
      return state.active;
    },
    getSum(state) {
      return state.sum;
    },
  },
  actions: {},
  modules: {}
})
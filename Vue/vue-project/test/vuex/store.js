import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  count: 1000
}
const mutations ={
  add(state){
    state.count++
  },
  reduce(state){
    state.count--
  }
}
const getters = {
  count: function (state) {
    return state.count += 1000
  }
}
export default new Vuex.Store({
  state,
  mutations,
  getters
})


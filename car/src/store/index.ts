import Vue from 'vue';
import Vuex from 'vuex';

import list from './modules/list'



Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    list
  },
  state: {
    info: {}  // 用户信息
  },
  mutations: {
    // 更新全局的state
    updateState(state, payload){
      state.info = payload;
    }
  },
  // plugins: [createLogger()]
})
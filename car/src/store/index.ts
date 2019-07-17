import Vue from "vue";
import Vuex from "vuex";
import home from "./modules/home";
import list from "./modules/list";
import city from "./modules/city";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    list,
    city
  },
  state: {},
  mutations: {},
  actions: {}
});

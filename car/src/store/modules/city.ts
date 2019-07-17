import { getcityList, secondCityList } from "@/services";
const state = {
  CityList: [] = [],
  secondCity: [] = [],
  cityonly: "北京",
  show: false
};
const actions = {
  async getcity({ commit }: any, payload: any) {
    let data = await getcityList(payload);
    commit("citylistsync", data.data);
  },
  async secondcity({ commit }: any, payload: any) {
    let data = await secondCityList(payload);
    commit("secondcitylistsync", data.data);
  }
};

const mutations = {
  citylistsync(state: any, payload: any) {
    console.log("citylist......", payload);
    state.CityList = payload;
  },
  secondcitylistsync(state: any, payload: any) {
    console.log("secondCity......", payload);
    state.secondCity = payload;
  },
  setcityonly(state: any, payload: any) {
    console.log("cityonly......", payload);
    state.cityonly = payload;
  },
  setcityShow(state: any, payload: any) {
    console.log("cityonly......", payload);
    state.show = payload;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};

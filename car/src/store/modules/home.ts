import { getlist, rightUpdate, deiltcar } from "@/services";

const state = {
  brandList: {} = {},
  letterList: [] = [],
  typeList: [] = [],
  num: "A",
  lists: [] = [],
  choos: false,
  deilts: [] = []
};

const actions = {
  async getBrandList({ commit }: { commit: Function }): Promise<void> {
    // 更新品牌信息
    let data: any = await getlist();
    let brandList: any = {};
    data.data.map((item: any) => {
      let index = item.Spelling[0];
      if (brandList[index]) {
        brandList[index].push(item);
      } else {
        brandList[index] = [item];
      }
    });
    commit("updateBrandList", brandList);
    // 更新字母信息
    let letterList: Array<string> = data.data.map(
      (item: { Spelling: String }) => {
        return item.Spelling[0];
      }
    );
    commit("updateLetterList", Array.from(new Set(letterList)));
  },
  async updataNum({ commit }: any, payload: any): Promise<void> {
    commit("updataNums", payload);
  },
  async rightUp({ commit }: any, payload: any) {
    let data = await rightUpdate(payload);
    commit("rightUpdata", data.data);
    commit("choos", true);
  },
  async deiltlis({ commit }: any, payload: any) {
    let data = await deiltcar(payload);
    console.log(data);
    commit("deiltcars", data.data);
  }
};
const mutations = {
  updateBrandList(state: any, payload: Object) {
    state.brandList = payload;
  },
  updateLetterList(state: any, payload: Array<string>) {
    state.letterList = payload;
  },
  updateTypeList(state: any, payload: Array<Object>) {
    state.typeList = payload;
  },
  updataNums(state: any, payload: any) {
    return (state.num = payload);
  },
  rightUpdata(state: any, payload: any) {
    return (state.lists = payload);
  },
  deiltcars(state: any, payload: any) {
    return (state.deilts = payload);
  },
  choos(state: any, payload: any) {
    return (state.choos = payload);
  }
};
export default {
  namespaced: true,
  actions,
  mutations,
  state
};

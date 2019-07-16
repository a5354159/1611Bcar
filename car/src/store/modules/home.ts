import { getlist } from "@/services";

const state = {
  brandList: {} = {},
  letterList: [] = []
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
  }
};
export default {
  namespaced: true,
  actions,
  mutations,
  state
};

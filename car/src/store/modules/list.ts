import {addSign} from '@/api/index.ts';

const state = {
  GomuchList:[]
}

const actions = {
    async getDetails({ commit }:any, payload:any) {
        let data:any = await addSign(payload);
        let obj:any = {};
        data.data.forEach((item:any) => {
            let key = item.Spelling.slice(0,1);
            obj[key] = [];   
        })
        for(let key in obj){
            data.data.forEach((item:any) => {
                let i = item.Spelling.slice(0,1);
                if(key == i){
                    obj[key].push(item);
                } 
            })
        }
        console.log('obj...',obj);
        commit('updateState',obj)
      }
}

const mutations = {
  updateState(state:any, payload:any) {
    console.log('111111',payload)
    state.GomuchList = payload;
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}

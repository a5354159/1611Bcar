import {addSign,getContent,detil} from '@/api/index.ts';
const state = {
  GomuchList:[],
  Content:[],
  Detil:[]
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
        // console.log('obj...',obj);
        commit('updateState',obj)
      },
      async getConten({ commit }:any, payload:any) {
        let data:any = await getContent(payload);
        // console.log('aaaaaaaa',data)
        commit('content',data.data)
      },

      //详情
      async getDetil({ commit }:any, payload:any) {
        // console.log('detil',payload)
        let data:any = await detil(payload);
        // console.log('detil',data)
        commit('detil',data.data)
      }
      
}

const mutations = {
  updateState(state:any, payload:any) {
    // console.log('111111',payload)
    state.GomuchList = payload;
  },
  content(state:any, payload:any) {
    // console.log('content',payload)
    state.Content = payload;
  },
  detil(state:any, payload:any) {
    console.log('detil',payload)
    state.Detil = payload;
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}

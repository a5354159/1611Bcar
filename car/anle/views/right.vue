<template>
    <div class="right">
        <ol>
         <li v-for="(item ,index) in getDataRis" :key='index' :data-item='item' :data='item'>{{item}}</li>
        </ol>
      </div>
</template>
<script lang='ts'>
import Vue from "vue";
import { mapState,mapActions } from "vuex";
export default Vue.extend({
   computed:{
    ...mapState({
      getDataRis: (state:any) => state.list.dataRight
    })
  },
  methods:{
    ...mapActions({
      getRitData:"list/pageList"
    })
  },
  // created(){
  //   this.getRitData()
  //   console.log(this.getDataRis)
  // }
});
</script>

<style lang="scss" scoped>
.right {
  position: fixed;
  z-index: 99;
  position: fixed;
  right: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  padding-left: 0.2rem;
  ol {
    li {
      font-size: 0.24rem;
      color: #666;
      font-weight: 500;
      padding: 0.02rem 0.1rem;
    }
  }
}
</style>

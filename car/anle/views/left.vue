<template>
    <div class="left">
        <div v-for="(item,key,index) in getDatas" :key="index" :id='key'>
          <p>{{key}}</p>
          <ul>
            <li v-for="(items,indexs) in item" :key='indexs'>
              <img :src="items.CoverPhoto" alt="">
              <span>{{items.Name}}</span>
            </li>
          </ul>
        </div>
      </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// @ is an alias to /src
import { mapActions,mapState } from "vuex";
export default {
   data() {
    return {
      arr: []
    }
  },
  computed:{
    ...mapState({
      getDatas: (state: any) => state.list.brandList
    })
  },
  methods: {
    ...mapActions({
      mesge: "list/getBrandList"
    })
  },
  created() {
    this.mesge()
    // console.log()
    // console.log(this.getDatas);
    
    // const newarr = [];
    // this.data.forEach(item => {
    //   let arr = item.Spelling[0];
    //   for (const iterator of arr) {
    //     if (newarr.indexOf(iterator) == -1) newarr.push(iterator);
    //   }
    // });
    // this.arr = newarr;
  }
}

 


</script>
<style lang="scss" scoped>
.left {
  > div {
    > p {
      font-size: 0.28rem;
      line-height: 0.4rem;
      background: #f4f4f4;
      padding-left: 0.3rem;
      color: #aaa;
    }
    > ul {
      margin: 0 0.3rem;
      > li {
        height: 1rem;
        box-sizing: border-box;
        border-bottom: 1px solid #ddd;
        display: flex;
        align-items: center;
        -webkit-box-align: center;
        > img {
          height: 0.8rem;
          // vertical-align: middle;
        }
        > span {
          font-size: 0.32rem;
          margin-left: 0.4rem;
        }
      }
    }
  }
}
</style>

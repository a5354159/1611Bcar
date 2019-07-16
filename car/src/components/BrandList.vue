<template>
    <div class="wrap" id="list">
        <div class="entry"></div>
        <div class="car-brander">
            <div v-for="(item,index) in data" :key="index" :id='index'>
                <p>{{index}}</p>
                <ul>
                    <li v-for="items in item" 
                    :key='items.MasterID' 
                    :data-id='items.MasterID' 
                    class='flex-row flex-centerY'>
                        <img :src="items.CoverPhoto" alt="" />
                        <span>{{items.Name}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    data: {
      type: Object
    }
  }
});
</script>


<style lang="scss" scoped>
@import "@/scss/global.scss";
.wrap {
  overflow: scroll;
  height: 100%;
  .car-brander {
    div {
      background: #fff;
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
          @include border_bottom();
          display: flex;
          align-items: center;
          -webkit-box-align: center;
          &:last-child:after {
            display: none;
          }
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
}
</style>


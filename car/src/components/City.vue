<template>
    <div  :class="show?'select-city active':'select-city'">
      <div class="province">
          <div class="location">
              <p>自动定位</p>
              <p>北京</p>
          </div>
          <div class="list">
              <p>省市</p>
              <ul>
                  <li v-for="(item,index) in Citylist" :key='index' :data-id='item.CityID' @click="SideShow(item.CityID)">
                      {{item.CityName}}
                  </li>
              </ul>
          </div>
      </div>
      <div :class="flag?'city active':'city'" @click="SideHide">
          <ul id="cityList">
            <li v-for="(item,index) in secondCity" :key='index' :data-id='item.CityID' @click="cityonlys(item.CityName)">
                {{item.CityName}}
            </li>
          </ul>
      </div>
    </div>
</template>

<script lang="ts">
import { mapState, mapActions } from "vuex";
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      flag: false
    };
  },
  async created() {
    await this.getCity();
  },
  computed: {
    ...mapState({
      Citylist: (state: any) => state.city.CityList,
      secondCity: (state: any) => state.city.secondCity,
      show: (state: any) => state.city.show
    })
  },
  methods: {
    ...mapActions({
      getCity: "city/getcity",
      secondcitys: "city/secondcity"
    }),
    async SideShow(CityID: any) {
      this.flag = true;
      await this.secondcitys(CityID);
    },
    SideHide(e: Event) {
      if (e && e.preventDefault) {
        e.preventDefault();
        this.flag = false;
      }
    },
    cityonlys(city: String) {
      this.$store.commit("city/setcityonly", city);
      this.$store.commit("city/setcityShow", false);
    }
  }
});
</script>

<style lang="scss" scoped>
.select-city.active {
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}
.select-city {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background: #fff;
  transition: -webkit-transform 0.2s ease;
  transition: transform 0.2s ease;
  transition: transform 0.2s ease, -webkit-transform 0.2s ease;
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
  .province {
    height: 100%;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    li {
      padding-left: 0.3rem;
      font-size: 0.28rem;
      height: 0.8rem;
      line-height: 0.8rem;
      border-bottom: 1px solid #eee;
      box-sizing: border-box;
      margin-left: 0.1rem;
      position: relative;
    }
    li:after {
      content: "";
      display: inline-block;
      padding-top: 0.16rem;
      padding-right: 0.16rem;
      border-top: 1px solid #999;
      border-right: 1px solid #999;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      position: absolute;
      right: 0.35rem;
      top: 0.3rem;
    }
    p {
      height: 0.4rem;
      line-height: 0.4rem;
      font-size: 0.24rem;
      padding-left: 0.2rem;
      background: #f4f4f4;
    }
    .location {
      p:first-child {
        height: 0.4rem;
        line-height: 0.4rem;
        font-size: 0.24rem;
        padding-left: 0.2rem;
        background: #f4f4f4;
      }
      p:nth-child(2) {
        padding-left: 0.4rem;
        font-size: 0.28rem;
        height: 0.8rem;
        line-height: 0.8rem;
        background: #fff;
      }
    }
  }
  .city {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 101;
    background: rgba(0, 0, 0, 0.6);
    visibility: hidden;
    ul {
      height: 100%;
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
      background: #fff;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
      li {
        padding-left: 0.3rem;
        font-size: 0.28rem;
        height: 0.8rem;
        line-height: 0.8rem;
        border-bottom: 1px solid #eee;
        box-sizing: border-box;
        margin-left: 0.1rem;
      }
    }
  }
  .city.active {
    visibility: visible;
    ul {
      -webkit-transform: translate3d(30%, 0, 0);
      transform: translate3d(30%, 0, 0);
      transition: -webkit-transform 0.2s ease;
      transition: transform 0.2s ease;
      transition: transform 0.2s ease, -webkit-transform 0.2s ease;
    }
  }
}
</style>

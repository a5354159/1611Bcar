<template>
    <div class="wrap">
        <header>
            <p>可向多个商家咨询最低价，商家及时回复</p>
        </header>
        <div class="content">
            <div data-hover="hover" class="q-info flex-row">
                <img :src="quotation.details.serial.Picture" />
                <div class="flex-column flex-centerX">
                    <p>奥迪A4L</p>
                    <p>2019款 35 TFSI 进取版 国V</p>
                </div>
                <span>></span>
            </div>

            <div class="self-info">
                <p class="tip">个人信息</p>
                <ul>
                    <li>
                        <span>姓名</span>
                        <input type="text" placeholder="输入你的真实中文姓名" maxlength="4" />
                    </li>
                    <li>
                        <span>手机</span>
                        <input type="tel" placeholder="输入你的真实手机号码" maxlength="11" />
                    </li>
                    <li>
                        <span>城市</span>
                        <span @click="jumpcity">{{cityonly}}></span>
                    </li>
                </ul>
                <div class="quotation">
                    <button data-hover="hover">询最低价</button>
                </div>
            </div>

            <div class="dealer-info">
                <p class="tip">选择报价经销商</p>
                <ul>
                    <li class="active" v-for="(item, index) in quotation.list" :key="index">
                        <span>a</span>
                        <div class="inner">
                            <p>
                                <span>{{item.dealerShortName}}</span>
                                <span>{{item.vendorPrice}}万</span>
                            </p>
                            <p>
                                <span>{{item.address}}</span>
                                <span>售{{item.saleRange}}</span>
                            </p>
                        </div>
                    </li>
                    <!---->
                    <!---->
                </ul>
            </div>
        </div>
      <City/>
        <!-- <footer>
            <button>询最低价</button>
        </footer>-->
        <!-- quotation -->
    </div>
</template>
<script lang='ts'>
import City from "@/components/City.vue";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  props: {},
  components: {
    City
  },
  data() {
    return {
    
    };
  },
  computed: {
    ...mapState({
      quotation: (state: any) => state.list.quotation,
      cityonly: (state: any) => state.city.cityonly
    })
  },
  methods: {
    ...mapActions({
      getQuotation: "list/getQuotation"
    }),
    jumpcity() {
      this.$store.commit('city/setcityShow',true)
    }
  },
  created() {
    console.log(this.$route.query);
    // cityId=201
    this.getQuotation({
      carId: this.$route.query.carId,
      cityId: 201,
      _1563237651079: ""
    });
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.wrap {
  height: 100%;
  // overflow: hidden;
}
header {
  height: 0.6rem;
  line-height: 0.6rem;
  width: 100%;
  background: #79cd92;
  text-align: center;
  z-index: 99;
}
.q-info {
  background: #fff;
  padding: 0.32rem 0.18rem 0.24rem;
  position: relative;
  height: 2rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-around;
  img {
    width: 2.3rem;
    height: 1.41rem;
    border: 1px solid #eee;
    box-sizing: border-box;
    border-radius: 5px;
  }
  > div {
    margin-left: 0.2rem;
    width: 4.3rem;
    // display: flex;
    // flex-direction: column;
    p:first-child {
      font-size: 0.36rem;
      font-weight: 500;
    }
    p:nth-child(2) {
      margin-top: 0.26rem;
      font-size: 0.32rem;
      color: #333;
    }
  }
}
.tip {
  padding: 0.1rem 0.2rem;
  display: flex;
  align-items: center;
  font-size: 0.24rem;
  color: #666;
  background: #eee;
}
.self-info {
  ul {
    background: #fff;
    padding: 0 0.2rem;
    li {
      font-size: 0.32rem;
      height: 0.88rem;
      line-height: 0.88rem;
      border-bottom: 1px solid #eee;
      box-sizing: border-box;
      color: #000;
      display: flex;
      justify-content: space-between;
      input {
        font-size: 0.32rem;
        padding-right: 0.2rem;
        // width: 88%;
        text-align: right;
        box-sizing: border-box;
        color: #555;
        border: none;
      }
    }
  }
  > div {
    background: #fff;
    text-align: center;
    padding-top: 0.3rem;
    padding-bottom: 0.28rem;
  }
}
.quotation button {
  font-size: 0.32rem;
  color: #fff;
  width: 80%;
  background: #3aacff;
  height: 0.7rem;
  border-radius: 0.1rem;
  border: none;
}
.dealer-info {
  ul {
    background: #fff;
    padding: 0 0.18rem;
    li {
      position: relative;
      padding: 0.26rem 0 0.26rem 0;
      border-bottom: 1px solid #eee;
      box-sizing: border-box;
      height: 1.65rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      > span {
        // width: 10px;
        // height: 10px;
        background: skyblue;
        padding: 2px 6px;
        border-radius: 50%;
      }
      > div {
        // flex: 1;
        width: 92%;
      }
      p:first-child {
        font-size: 0.3rem;
        span:last-child {
          font-size: 0.24rem;
          float: right;
          color: red;
        }
      }
      p:nth-child(2) {
        margin-top: 0.1rem;
        font-size: 0.24rem;
        color: #a2a2a2;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          font-size: 0.24rem;
        }
        span:first-child {
          display: inline-block;
          max-width: 4.6rem;
        }
      }
    }
  }
}
</style>
<template>
    <div class="wrap">
        <div class="c-type">
            <span>2019</span>
        </div>
        <div
            class="forlis"
            v-for="(item, index) in Detil.list"
            :key="index"
            @click="somuch(item.car_id)"
        >
            <p>{{item.exhaust_str}}/{{item.max_power_str}}{{item.inhale_type}}</p>
            <ul>
                <li>
                    <p>
                        <span>{{item.market_attribute.year}}款 {{item.car_name}}</span>
                        <span>{{item.market_attribute.dealer_price_min}}起</span>
                    </p>
                    <p>
                        <span>{{item.horse_power}}马力{{item.gear_num}}档{{item.trans_type}}</span>
                        <span>指导价{{item.market_attribute.dealer_price_max}}</span>
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script lang='ts'>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      Detil: (state: any) => state.list.Detil
    })
  },
  methods: {
    somuch(num: any) {
      this.$router.push({
        path: "/quotation",
        query: {
          carId: num,
          _1563237651079: ""
        }
      });
    }
  },
  created() {
    console.log("a");
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.forlis {
  font-size: 0.26rem;
  color: #999;
  background: #f4f4f4;
  > p {
    padding: 0.1rem 0.2rem;
    font-size: 0.26rem;
  }
  ul {
    background: #fff;
    padding: 0 0.2rem;
    li {
      p {
        display: flex;
        justify-content: space-between;
        padding: 0.1rem 0;
      }
      p:first-child {
        padding: 0.26rem 0 0.18rem 0;
        font-size: 0.3rem;
        line-height: 1;
        color: #3d3d3d;
        span:nth-child(2) {
          font-size: 0.27rem;
          color: #ff2336;
          margin-left: 0.1rem;
        }
      }
      p:nth-child(2) {
        color: #bdbdbd;
        // font-size: 0.26rem;
        span {
          font-size: 0.27rem;
        }
      }
    }
  }
}
.c-type {
  padding-left: 0.2rem;
  font-size: 0.3rem;
  line-height: 0.76rem;
  height: 0.76rem;
  background: #fff;
  overflow-x: scroll;
  border-top: 0.15rem solid #f4f4f4;
  span {
    color: skyblue;
  }
}
</style>
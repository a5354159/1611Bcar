<template>
    <div class="main">
        <div class="car">
             <div class="content">
                <div class="img">
                    <img src="http://img2.bitautoimg.com/autoalbum/files/20160831/022/12341202292972_5235269_8.jpg" alt="">
                    <span>7942张图片</span>
                </div>
                <div class="info">
                    <p>
                        21.08-41.1
                        <span>万</span>
                    </p>
                    <p>指导价 28.68-40.18万</p>
                    <div class="action active">
                        <button>询问底价</button>
                    </div>
                </div>
                <div class="c-list">
                    <div class="c-type">
                        <span>全部</span>
                        <span>2019</span>
                    </div>
                    <div>
                        <p>1.4L/110kW 涡轮增压</p>
                        <ul>
                            <li>
                                <p>2019款 35 TFSI 进取版 国V</p>
                                <p>150马力7档双离合</p>
                                <p>
                                    <span>指导价 29.30万</span>
                                    <span>20.65万起</span>
                                </p>
                                <button>询问低价</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
           
    
    </div>
  
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapActions } from "vuex";
export default Vue.extend({
  data() {
    return {};
  },
  computed: {
    ...mapState({
      deiltlist: (state: any) => state.home.deilts
    })
  },
  methods: {
    ...mapActions({
      deiltFun: "home/deiltlis"
    })
  },
  created() {
    this.deiltFun(this.$route.query.id);
    console.log(this.deiltlist);
  }
});
</script>


<style lang="scss" scoped>
.main {
  height: 100%;
  .car {
    background: #f4f4f4;
    .content {
      height: 100%;
      .img {
        position: relative;
        height: 3.29rem;
        overflow: hidden;
        img {
          width: 100%;
          top: 50%;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
          position: absolute;
        }
        span {
          position: absolute;
          bottom: 0.3rem;
          right: 0.3rem;
          color: #fff;
          padding: 1px 0.1rem;
          border-radius: 0.2rem;
          background: rgba(0, 0, 0, 0.6);
          font-size: 0.24rem;
        }
      }
      .info {
        padding: 0.36rem 0.2rem 0.3rem;
        background: #fff;
        position: relative;
        p {
          max-width: 3.4rem;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        p:first-child {
          font-size: 0.36rem;
          color: red;
          font-weight: 500;
        }
        p:nth-child(2) {
          font-size: 0.26rem;
          color: silver;
        }
        .action {
          padding-top: 0.2rem;
          -webkit-box-pack: justify;
          justify-content: space-between;
          width: 50%;
          position: absolute;
          right: 0.1rem;
          top: 0.22rem;
          display: flex;
        }
        .action button:last-child {
          background: #00afff;
          color: #fff;
          border-radius: 0.1rem;
          font-size: 0.32rem;
          height: 0.7rem;
          width: 3.45rem;
          border: none;
          box-sizing: border-box;
        }
      }
      .c-list {
        .c-type {
          border-top: 0.15rem solid #f4f4f4;
          padding: 0 0.3rem;
          font-size: 0.32rem;
          height: 0.77rem;
          line-height: 0.77rem;
          background: #fff;
          span.active {
            color: #3aacff;
          }
          span {
            padding-right: 0.46rem;
          }
        }
        > div > p {
          padding: 0 0.2rem;
          height: 0.5rem;
          line-height: 0.5rem;
          font-size: 0.26rem;
          color: #999;
          background: #f4f4f4;
        }
        > div > ul {
          background: #fff;
          li {
            padding: 0 0.2rem;
            border-bottom: 0.18rem solid #f4f4f4;
            overflow: hidden;
            button {
              border: none;
              border-top: 1px solid #eee;
              width: 110%;
              height: 0.8rem;
              font-size: 0.32rem;
              color: #00afff;
              background: #fff;
              font-weight: 500;
              margin-left: -0.3rem;
              outline: none;
              -webkit-appearance: none;

            }
            p:first-child {
              padding: 0.26rem 0 0.18rem;
              font-size: 0.3rem;
              line-height: 1;
              color: #3d3d3d;
            }
            p:nth-child(2) {
              color: #bdbdbd;
              font-size: 0.26rem;
            }
            p:nth-child(3) {
              text-align: right;
              padding-bottom: 0.1rem;
              font-size: 0.24rem;
              color: #818181;
              span:nth-child(2) {
                font-size: 0.3rem;
                color: #ff2336;
                margin-left: 0.1rem;
              }
            }
          }
          li:last-child {
            border-bottom: 0;
          }
        }
      }
    }
  }
}
</style>


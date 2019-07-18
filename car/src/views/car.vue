<template>
    <div class="wrap">
        <div class="content">
            <div class="img">
                <img :src="Detil.CoverPhoto" alt />
            </div>
            <div class="info" v-if="Detil.market_attribute">
                <p>
                    <span>{{Detil.market_attribute.dealer_price}}</span>
                    <!-- <span>{{detil_dealer}}</span> -->
                </p>
                <p>指导价{{Detil.market_attribute.official_refer_price}}</p>
                <!-- <p>指导价{{detil_refer}}</p> -->
                <button @click="somuch(1)">询问底价</button>
            </div>
            <div class="list">
                <div class="c-type">
                    <span class="active">全部</span>
                    <span class>2019</span>
                </div>
                <div>
                    <div class="forlis" v-for="(item, index) in Detil.list" :key="index">
                        <p>{{item.exhaust_str}}/{{item.max_power_str}}{{item.inhale_type}}</p>
                        <ul>
                            <li>
                                <p>{{item.market_attribute.year}}款 {{item.car_name}}</p>
                                <p>{{item.horse_power}}马力{{item.gear_num}}档{{item.trans_type}}</p>
                                <p>
                                    <span>指导价{{item.market_attribute.dealer_price_max}}</span>
                                    <span>{{item.market_attribute.dealer_price_min}}起</span>
                                </p>
                                <button
                                    
                                    @click="somuch(item.car_id)"
                                >询问底价</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="bottom">
            <p >询问底价</p>
            <p>本地经销商为你报价</p>
        </div>
    </div>
</template>
<script lang='ts'>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    props: {},
    components: {},
    data() {
        return {
        };
    },
    computed: {
        ...mapState({
            Detil: (state: any) => state.list.Detil
        })
    },
    methods: {
        ...mapActions({
            getDetil: "list/getDetil"
        }),
        somuch(num) {
            console.log(num);
            this.$router.push({path:'/quotation',query:{
                carId:num,
                _1563237651079:''
            }})
            // carId: 131315
            // cityId: 201
        }
    },
    created() {
        // console.log(this.$route.query);
        this.getDetil(this.$route.query);
        console.log(this.Detil);
    },
    mounted() {
        // console.log(this.Detil.AliasName);
    }
};
</script>
<style scoped lang="scss">
.wrap {
    width: 100%;
    // height: 100%;
    margin-bottom: 1rem;
    overflow: hidden;
}
.img {
    height: 200px;
    overflow: hidden;
    img {
        width: 100%;
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
    button {
        padding: 0.2rem 0;
        -webkit-box-pack: justify;
        width: 50%;
        position: absolute;
        right: 0.1rem;
        top: 0.23rem;
        background: #00afff;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 5px;
    }
}

.c-type {
    border-top: 0.15rem solid #f4f4f4;
    padding: 0 0.3rem;
    font-size: 0.32rem;
    height: 0.77rem;
    line-height: 0.77rem;
    background: #fff;
    span {
        padding-right: 0.46rem;
    }
}
.active {
    color: #3aacff;
}
.list {
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
            p:first-child {
                padding: 0.26rem 0 0.18rem 0;
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
                span:nth-child(1) {
                    font-size: 0.2rem;
                }
                span:nth-child(2) {
                    font-size: 0.3rem;
                    color: #ff2336;
                    margin-left: 0.1rem;
                }
            }
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
            }
        }
    }
}
.bottom {
    position: fixed;
    width: 100%;
    bottom: 0;
    z-index: 99;
    background: #3aacff;
    height: 1rem;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    p:first-child {
        font-size: 0.32rem;
        margin-top: 0.12rem;
        font-weight: 500;
    }
    p:nth-child(2) {
        font-size: 0.24rem;
    }
}
</style>
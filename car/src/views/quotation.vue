<template>
    <div>
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
                        <span>北京</span>
                    </li>
                </ul>
                <div class="quotation">
                    <button data-hover="hover">询最低价</button>
                </div>
            </div>
        </div>
        <!-- quotation -->
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
            quotation: (state: any) => state.list.quotation
        })
    },
    methods: {
        ...mapActions({
            getQuotation: "list/getQuotation"
        })
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
</style>
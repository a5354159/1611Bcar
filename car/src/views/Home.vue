<template>
    <div>
        <div class="left">
            <div v-for="(item,key,index) in GomuchList" :key="index" :id="key">
                <p>{{key}}</p>
                <div class="conten">
                    <dl v-for="file in item" :key="file.MasterID">
                        <dt>
                            <img :src="file.CoverPhoto" alt />
                        </dt>
                        <dd>{{file.Name}}</dd>
                    </dl>
                </div>
            </div>
        </div>
        <div class="right">
            <ul>
                <li
                    v-for="(item, index) in j"
                    :key="index"
                >{{String.fromCharCode("A".charCodeAt() + item-1)}}</li>
            </ul>
        </div>
        <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
        <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    </div>
</template>
<script lang="ts">
// import { Component, Vue } from 'vue-property-decorator';
import { mapState, mapMutations, mapActions } from "vuex";
export default {
    data() {
        return {
            arr: [],
            j: 26,
            str: "A"
        };
    },
    computed: {
        ...mapState({
            GomuchList: (state: any) => state.list.GomuchList
        })
    },
    methods: {
        ...mapActions({
            getDetails: "list/getDetails"
        })
    },
    created() {
        this.getDetails({
            _1563189832007: ""
        });
    }
};
</script>
<style lang="scss" scoped>
.right {
    position: fixed;
    right: 0;
    top: 20px;
    ul {
        width: 100%;
        height: 100%;
        li {
            padding: 3px 6px;
            text-align: center;
        }
    }
}
.left {
    p {
        padding: 3px 10px;
        background: #f4f4f4;
        color: #aaa;
        font-size: 14px;
    }
}
.conten {
    display: flex;
    flex-direction: column;
    dl {
        display: flex;
        padding: 0 10px;
        box-sizing: border-box;
        border-bottom: 1px solid #ddd;
        // justify-content: center;
        align-items: center;
        dt {
            width: 50px;
            img {
                width: 100%;
            }
        }
        dd {
            margin-left: 10px;
        }
    }
}
</style>

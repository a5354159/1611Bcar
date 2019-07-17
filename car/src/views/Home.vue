<template>
    <div>
        <div class="left">
            <div v-for="(item,key,index) in GomuchList" :key="index" :id="key">
                <p>{{key}}</p>
                <div class="conten">
                    <dl v-for="file in item" :key="file.MasterID" @click="conten(file.MasterID)">
                        <dt>
                            <img :src="file.CoverPhoto" alt />
                        </dt>
                        <dd>{{file.Name}}</dd>
                    </dl>
                </div>
            </div>
            <div class="inner" v-if="flag" @click="flg">
                <div class="wrap">
                    <div v-for="(item, index) in Content" :key="index" >
                        <p>{{item.GroupName}}</p>

                        <!-- <router-link to="/car" tag="dl" v-for="(items, index) in item.GroupList" :key="index">
                        <dt>
                                <img :src="items.Picture" alt />
                            </dt>
                            <dd>
                                <span>{{items.AliasName}}</span>
                                <span>{{items.DealerPrice}}</span>
                            </dd>
                        </router-link> -->
                        <dl v-for="(items, index) in item.GroupList" :key="index" @click="carDetil(items)">
                            <dt>
                                <img :src="items.Picture" alt />
                            </dt>
                            <dd>
                                <span>{{items.AliasName}}</span>
                                <span>{{items.DealerPrice}}</span>
                            </dd>
                        </dl>
                    </div>
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
import { mapState, mapMutations, mapActions } from "vuex";
export default {
    data() {
        return {
            arr: [],
            j: 26,
            str: "A",
            flag: false
        };
    },
    computed: {
        ...mapState({
            GomuchList: (state: any) => state.list.GomuchList,
            Content: (state: any) => state.list.Content
        })
    },
    methods: {
        ...mapActions({
            getDetails: "list/getDetails",
            getConten: "list/getConten"
        }),
        flg(){
            this.flag = false;
        },
        conten(con: any) {
            // console.log(con);
            this.flag = true;
            this.getConten({
                MasterID: con,
                _1563237651079: ""
            });
        },
        carDetil(items){
            // console.log(items);
            this.$router.push({path:'/car',query:{
                SerialID:items.SerialID,
                _1563237651079:''
            }})
        }
    },
    created() {
        this.getDetails({
            _1563237651079: ""
        });
        // this.getDetails({
        //     _1563189832007: ""
        // });
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
        padding: 2px 15px;
        background: #f4f4f4;
        color: #aaa;
        font-size: 14px;
    }
}
.conten {
    display: flex;
    flex-direction: column;
    padding: 1px 15px;

    dl {
        display: flex;
        padding: 3px 0;
        box-sizing: border-box;
        border-bottom: 1px solid #ddd;
        // justify-content: center;
        align-items: center;
        dt {
            width: 40px;
            img {
                width: 100%;
            }
        }
        dd {
            margin-left: 20px;
        }
    }
    dl:last-child {
        border-bottom: none;
    }
}
.inner {
    position: fixed;
    right: 0;
    top: 0;
    width: 75%;
    height: 100%;
    background: #fff;
    z-index: 99;
    overflow-y: scroll;
    padding: 0 0 0 2px;
    p {
        box-sizing: border-box;
        padding: 3px 10px;
        font-size: 14px;
    }
    img {
        width: 90px;
    }
}
.wrap {
    div {
        dl {
            padding: 3px 0 3px 10px;
            border-bottom: 1px solid #ccc;
            display: flex;
            align-items: center;
            dd {
                display: flex;
                flex-direction: column;
                margin-left: 5px;
            }
            span {
                padding: 3px 0;
            }
            span:nth-child(2) {
                color: red;
            }
        }
        dl:last-child {
            border-bottom: none;
        }
    }
}
</style>

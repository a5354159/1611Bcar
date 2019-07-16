<template>
  <div id="app">
    <div class="main">
      <left></left>
      <right></right>
      <div class="sect"></div>
    </div>

  </div>
</template>
<script lang="ts">
import Vue from "vue";
import left from "./views/left.vue";
import right from "./views/right.vue";

export default Vue.extend({
  components: {
    left,
    right
  }

  //   // created() {
  //   // const newarr = [];
  //   // this.data.forEach(item => {
  //   //   let arr = item.Spelling[0];
  //   //   for (const iterator of arr) {
  //   //     if (newarr.indexOf(iterator) == -1) newarr.push(iterator);
  //   //   }
  //   // });
  //   // this.arr = newarr;
  //   // }
});
// export default class App extends Vue {}
</script>

<style lang="scss">
* {
  padding: 0;
  list-style: none;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // color: #2c3e50;
  width: 100%;
  height: 100%;
  .main {
    overflow-y: scroll;
  }
}
</style>

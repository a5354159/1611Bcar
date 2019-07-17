<template>
    <div id="letter">
       <ul 
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd">
      <li v-for="(item) in data" 
      :key="item" 
      :class="current==item?'active':''"
      >{{item}}</li>
    </ul>
    <span v-if="isTouch" class="letter">{{current}}</span>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      isTouch: false
    };
  },
  props: {
    data: {
      type: Array
    },
    current: {
      type: String
    }
  },
  methods: {
    touchStart(e: Event): void {
      this.isTouch = true;
      this.touchMove(e);
    },
    touchMove(e: Event): void {
      // console.log('e...', e);
      let pageY = e.touches[0].pageY;
      let letterHeight = 0.4 * window.innerWidth / 750 * 100;
      let letterOffsetTop =
        (window.innerHeight - letterHeight * this.data.length) / 2;
      let letterIndex = Math.floor((pageY - letterOffsetTop) / letterHeight);
      // 处理上边界
      if (letterIndex < 0) {
        letterIndex = 0;
      }
      // 处理下边界
      if (letterIndex > this.data.length - 1) {
        letterIndex = this.data.length - 1;
      }
      // console.log('letter...', this.data[letterIndex]);
      // this.cureen = this.data[letterIndex];
      this.$emit("update:current", this.data[letterIndex]);
    },
    touchEnd(e: Event): void {
      this.isTouch = false;
      // this.cureen = "";
      this.$emit("update:current", "");
    }
  }
});
</script>


<style lang="scss" scoped>
ul {
  position: fixed;
  z-index: 101;
  top: 0;
  right: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
li {
  font-size: 0.24rem;
  color: #666;
  font-weight: 500;
  padding: 0 0.1rem;
  height: 0.4rem;
  width: 0.5rem;
}
li.active {
  font-size: 0.36rem;
  padding-right: 0.5rem;
}
.letter {
  display: inline-block;
  width: 1.6rem;
  height: 1.6rem;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 0.1rem;
  top: 50%;
  left: 50%;
  position: fixed;
  color: #fff;
  font-size: 0.8rem;
  text-align: center;
  line-height: 1.6rem;
  transform: translate3d(-50%, -50%, 0);
}
</style>

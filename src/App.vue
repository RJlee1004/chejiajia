<template>
  <div id="app">
    <!-- <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view> -->
    <router-view></router-view>
  </div>
</template>

<script>
window.onload = function () {
  document.addEventListener("touchstart", function (event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  });
  document.addEventListener("gesturestart", function (event) {
    event.preventDefault();
  });
};
</script>

<script>
export default {
  data() {
    return {
      id: "",
      index: "",
    };
  },
  components: {
    Home: () => import("./views/Home"),
    tabBar: () => import("./components/foot/tabbar"),
    Goods: () => import("./views/Goods"),
  },
  mounted() {
    // console.log(this.$route.params.index);
    // console.log(this.$route.params.id);
    // console.log(this.$route.params.card);
    // this.index = this.$route.params.index;
  },
};
</script>

<style lang="less">
@import url(assets/css/common.css);
// @supports (
//     (height: constant(safe-area-inset-top)) or
//       (height: env(safe-area-inset-top))
//   )
//   and (-webkit-overflow-scrolling: touch) {
//   body {
//     /* 适配齐刘海 */
// padding-top: constant(safe-area-inset-top);
// padding-top: env(safe-area-inset-top);

//     /* 适配底部小黑条 */
//     padding-bottom: calc(1rem+constant(safe-area-inset-bottom));
//     padding-bottom: calc(1rem+env(safe-area-inset-bottom));
//   }
// }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

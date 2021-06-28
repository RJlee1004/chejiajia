<template>
  <div id="addcar">
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      width="750"
      duration="1500"
    >
      <van-swipe-item v-for="(item, index) in images" :key="index">
        <img :src="item" alt="" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";

Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
  name: "midBanner",
  components: {},
  data() {
    return {
      payType: "0", // 默认支付方式:微信  1支付宝
      images: [
        require("../../assets/img/travel/fine.jpg"),
        require("../../assets/img/travel/nezha.jpg"),
        require("../../assets/img/travel/smallCat.jpg"),
      ],
    };
  },
  computed: {},
  methods: {},
  mounted() {},
  created() {},
};
</script>

<style lang="less" scoped>
#addcar {
  width: 750px;
  height: 320px;
  margin: 0 auto;
}
img {
  width: 750px;
  height: 320px;
}
</style>

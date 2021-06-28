<template>
  <div id="headerbg">
    <van-swipe class="my-swipe" :autoplay="5000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in images" :key="index">
        <img :src="item" alt="" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
// 浮窗客服
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";

Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
  name: "HeaderBg",
  components: {},
  data() {
    return {
      swipeItems: 2,
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
#headerbg {
  width: 750px;
  height: 320px;
}
img {
  width: 750px;
  height: 320px;
}
</style>

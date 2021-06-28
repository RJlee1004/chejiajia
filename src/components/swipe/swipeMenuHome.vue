<template>
  <div id="swipemenu">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <ul>
          <li
            v-for="(img, index) in brandSwipe.slice(0, 8)"
            :key="index"
            @click="toGoods(img.navigationName, img.navigationId)"
          >
            <van-badge
              :content="brandSwipe[index].mark"
              color="#ff7a4b"
              @badge-font-size="8"
            >
              <img :src="brandSwipe[index].logoUrl" alt="" />
            </van-badge>
            <span>{{ brandSwipe[index].navigationName }}</span>
          </li>
        </ul>
      </van-swipe-item>
      <van-swipe-item>
        <ul>
          <li
            v-for="(img, index) in brandSwipe.slice(8, brandSwipe.length)"
            :key="index"
            @click="toGoods(img.navigationName, img.navigationId)"
          >
            <van-badge :content="brandSwipe[index].mark" color="#ff7a4b">
              <img :src="img.logoUrl" alt="" />
            </van-badge>
            <span>{{ img.navigationName }}</span>
          </li>
        </ul>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
import { Badge } from "vant";
import { Toast } from "vant";

Vue.use(Toast);
Vue.use(Badge);
Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
  name: "swipeMenu",
  components: {},
  props: {
    brandSwipe: Array,
    required: true,
  },
  data() {
    return {
      // curIndex: 0,
      // isBlue: false,
      swipeItems: 2,
      payType: "0", // 默认支付方式:微信  1支付宝
      // images: [],
      // menus: [],
      // marks: [],
    };
  },
  computed: {},
  methods: {
    toGoods(name, id) {
      if (name === "中国石化") {
        this.$router.push({ path: "/goods/" + id });
      } else {
        //弹出敬请期待
        Toast("敬请期待");
      }
    },
  },
  mounted() {},
  created() {},
};
</script>

<style lang="less" scoped>
@deep: ~">>>";
@{deep} .van-swipe__indicator {
  height: 4px;
  width: 22px;
  border-radius: 25%;
  background-color: #3f76ff;
}
.my-swipe ul {
  list-style: none;
  width: 100%;
  height: 430px;
  border-radius: 25px;
  background-color: #ffffff;
}
li {
  display: inline-block;
  width: 150px;
  height: 141px;
  text-align: center;
  margin-left: 23px;
  margin-top: 35px;
}
img {
  width: 99px;
  height: 92px;
}
span {
  font-size: 15px;
  display: block;
  margin-top: 20px;
  color: #333333;
}

@{deep}.van-badge{
  // width: 120px;
  width: 140%;
  height: 40px;
  // font-size: 8px;
}
@{deep}.van-badge--fixed{
  top: -5px;
}
</style>

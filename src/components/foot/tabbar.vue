<template>
  <div id="tabbar">
    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item replace to="/home">
        <span>车主服务</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.index : icon.inIndex"
        />
      </van-tabbar-item>
      <van-tabbar-item replace to="/vip">
        <span>特惠VIP</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.right : icon.inRight"
        />
      </van-tabbar-item>
      <van-tabbar-item>
        <span>天天领油</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.oil : icon.inOil"
        />
      </van-tabbar-item>
      <van-tabbar-item to="/mine">
        <span>我的</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.mine : icon.inMine"
        />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
import router from "../../router";
import { Toast } from "vant";

Vue.use(Toast);
Vue.use(Tabbar);
Vue.use(TabbarItem);

export default {
  name: "TabBar",
  components: {},
  data() {
    return {
      active: this.$store.getters.getActive,
      icon: {
        index: require("../../assets/img/tabbar/tab_index_active.png"),
        inIndex: require("../../assets/img/tabbar/tab_index.png"),
        right: require("../../assets/img/tabbar/tab_rights_active.png"),
        inRight: require("../../assets/img/tabbar/tab_rights.png"),
        oil: require("../../assets/img/tabbar/tab_welfare_active.png"),
        inOil: require("../../assets/img/tabbar/tab_welfare.png"),
        mine: require("../../assets/img/tabbar/tab_mine_active.png"),
        inMine: require("../../assets/img/tabbar/tab_mine.png"),
      },
      payType: "0", // 默认支付方式:微信  1支付宝
    };
  },
  computed: {},
  methods: {
    onChange(index) {
      // console.log(index);
      this.$store.commit("setActive", index);
      // console.log(this.$store.getters.getActive);
      if (index === "2") {
        Toast("敬请期待");
      }
    },
  },
  mounted() {},
  created() {},
};
</script>

<style lang="less" scoped>
</style>

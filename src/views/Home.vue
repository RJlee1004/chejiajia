<template>
  <div id="home">
    <common-head>车主服务</common-head>
    <header-bg></header-bg>
    <swipe-menu v-if="isAxios" :brandSwipe="brands"></swipe-menu>
    <mid-banner
      v-if="isAxios"
      :travelBanner="travelLists"
      :travelNames="titles"
    ></mid-banner>
    <van-empty v-else image="network" description="网络开小差了" />
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import axios from "../utils/axios";
export default {
  name: "Home",
  components: {
    commonHead: () => import("../components/head/commonHead"),
    headerBg: () => import("../components/head/headerBgHome"),
    swipeMenu: () => import("../components/swipe/swipeMenuHome"),
    midBanner: () => import("../components/middle/midBannerHome"),
    tabBar: () => import("../components/foot/tabbar"),
    payAtOnce: () => import("../components/foot/payAtOnce"),
  },
  data() {
    return {
      brands: [],
      travelLists: [],
      titles: [],
      id: "",
      isAxios: true,
    };
  },
  computed: {},
  methods: {},
  mounted() {
    this.id = this.$route.params.id;
    console.log(this.id);
  },
  created() {
    axios
      .get("/index/getAgentConfig")
      .then((res) => {
        this.titles = res.data;
        // console.log(this.titles);
        document.title = this.titles.title;
      })
      .catch((err) => {
        this.isAxios = false;
      });
    axios
      .get("/index/iconNavigationList")
      .then((res) => {
        this.brands = res.data;
        // console.log(typeof this.brands);
      })
      .catch((err) => {
        this.isAxios = false;
      });

    axios
      .get("/index/easyTravelList")
      .then((res) => {
        this.travelLists = res.data;
        // console.log(this.travelLists);
      })
      .catch((err) => {
        this.isAxios = false;
      });
  },
};
</script>

<style lang="less" scoped>
@deep: ~">>>";
@{deep} .van-field__control {
  color: red;
}
.font {
  font-size: 32px;
}
#home {
  font-size: 30px;
  height: 100%;
  button {
    color: aquamarine;
  }
}
#swipemenu {
  position: relative;
  margin-top: -10px;
}
</style>

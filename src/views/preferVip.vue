<template>
  <div class="prefervip">
    <common-head>特惠Vip</common-head>
    <add-car></add-car>
    <label-tab
      :agentHeads="agents"
      :brandnames1="brandNames1"
      :productCons="products"
      :isAxioss="isAxios"
    ></label-tab>
    <tab-bar></tab-bar>
  </div>
</template>
<script>
import axios from "../utils/axios";
export default {
  name: "preferVip",
  data() {
    return {
      agents: [],
      brandNames1: [],
      products: [],
      isAxios: true,
    };
  },
  components: {
    commonHead: () => import("../components/head/commonHead"),
    addCar: () => import("../components/middle/addCar"),
    labelTab: () => import("../components/swipe/labelTab"),
    tabBar: () => import("../components/foot/tabbar"),
  },
  mounted() {},
  created() {
    axios
      .get("/brand/category/list/agent")
      .then((res) => {
        this.agents = res.data;
        // console.log(this.agents);
      })
      .catch((err) => {
        this.isAxios = false;
      });
    axios
      .get("/brand/list/agent/11")
      .then((res) => {
        this.brandNames1 = res.data;
      })
      .catch((err) => {
        this.isAxios = false;
      });
    axios
      .get("/product/list/agent", {
        brandId: "14",
        productType: "MERCHANDISE_COUPON",
      })
      .then((res) => {
        res.data.map((val, index) => {
          this.products.push(val);
        });
        // console.log(this.products);
      })
      .catch((err) => {
        this.isAxios = false;
      });
  },
};
</script>
<style lang="less" scoped>
#prefervip {
  background: rgb(245, 246, 248);
}
</style>

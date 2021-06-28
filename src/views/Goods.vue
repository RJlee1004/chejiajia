<template>
  <div id="goods">
    <common-head>商品详情</common-head>
    <header-tab-goods></header-tab-goods>
    <invest v-if="id === '1'"></invest>
    <investPanel v-if="id === '1'" :ID="id"></investPanel>
    <investPanel2 v-else></investPanel2>
    <pay-at-once :brandID="brandid"></pay-at-once>
  </div>
</template>
<script>
export default {
  name: "Goods",
  data() {
    return {
      id: "",
      brandid: "",
    };
  },
  components: {
    commonHead: () => import("../components/head/commonHead"),
    headerTabGoods: () => import("../components/head/headerTabGoods"),
    invest: () => import("../components/head/invest"),
    investPanel: () => import("../components/middle/investPanel"),
    moneySum: () => import("../components/middle//moneySum"),
    payAtOnce: () => import("../components/foot/payAtOnce"),
    investPanel2: () => import("../components/middle/investPanel2"),
  },
  mounted() {
    this.id = this.$route.params.id;
    // console.log(this.$route.params); //可以拿到点进来的id
  },
};
</script>
<style lang="less" scoped>
@deep: ~">>>";
#goods {
  background: #f5f6f8;
  width: 750px;
}
</style>

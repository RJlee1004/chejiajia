<template>
  <div id="ticketmine">
    <common-head>我的卡券</common-head>
    <replace-ticket></replace-ticket>
  </div>
</template>

<script>
export default {
  name: "ticketMine",
  components: {
    commonHead: () => import("../components/head/commonHead"),
    replaceTicket: () => import("../components/order/replaceTicket"),
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {},
  created() {},
};
</script>

<style lang="less" scoped>
@deep: ~">>>";
</style>

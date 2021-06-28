<template>
  <div id="dailygetoil"></div>
</template>

<script>
export default {
  name: "dailygetoil",
  components: {},
  data() {
    return {
      payType: "0", // 默认支付方式:微信  1支付宝
    };
  },
  computed: {},
  methods: {},
  mounted() {},
  created() {},
};
</script>

<style lang="less" scoped>
#dailygetoil {
  width: 690px;
  height: 160px;
  background: green;
  position: absolute;
  left: 30px;
  top: 270px;
}
</style>

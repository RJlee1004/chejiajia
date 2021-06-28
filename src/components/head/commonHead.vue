<template>
  <div id="commonhead">
    <span><slot></slot></span>
  </div>
</template>

<script>
export default {
  name: "CommonHead",
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
#commonhead {
  width: 100%;
  height: 120px;
  // background: blue;
  text-align: center;
}
span {
  display: inline-block;
  color: #333333;
  font-size: 34px;
  margin-top: 57px;
}
</style>

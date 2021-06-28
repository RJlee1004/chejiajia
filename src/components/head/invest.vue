<template>
  <div id="invest">
    <div class="invest_count">充值账号</div>
    <div class="invest_input">
      <van-field type="digit" placeholder="请输入中国石化加油卡号" />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Field } from "vant";

Vue.use(Field);
export default {
  name: "Invest",
  data() {
    return {};
  },
  components: {},
  mounted() {},
};
</script>
<style lang="less" scoped>
@deep: ~">>>";
#invest {
  width: 700px;
  height: 100%;
  // height: 182px;
  margin: 20px auto;
  border-radius: 20px;
  background-color: #ffffff;
}
.invest_count {
  font-size: 30px;
  line-height: 58px;
  letter-spacing: -1px;
  color: #333333;
  position: absolute;
  left: 54px;
  top: 373px;
  z-index: 1;
}
.invest_input{
  width: 700px;
  height: 100%;
  margin: 20px auto;
  background-color: #ffffff;
}
@{deep}.van-field__body{
  width: 459px;
	height: 40px;
  color: #cccccc;
  font-size: 42px;
  margin-top: 95px;
  margin-right: 215px;
}
</style>

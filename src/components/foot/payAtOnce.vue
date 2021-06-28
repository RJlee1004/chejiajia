<template>
  <div id="payatonce">
    <div class="back">
      <div class="backer" @click="goBack">
        <span class="return"></span>
        <span class="title">返回</span>
      </div>
    </div>
    <div class="pay">
      <div class="payer">
        应付 <span class="symbol">￥</span
        ><span class="sum">{{ this.$store.getters.getSum }}</span>
      </div>
      <div class="pay-btn">
        <van-button
          round
          type="info"
          color="#eecdaa"
          replace
          @click="paySuccess"
          >立即支付</van-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Button } from "vant";
import { Toast } from "vant";

Vue.use(Toast);
Vue.use(Button);
export default {
  name: "payAtOnce",
  components: {},
  data() {
    return {
      id: "",
    };
  },
  computed: {},
  methods: {
    goBack() {
      if (this.id === "1") {
        this.$router.push({ path: "/home" });
      } else {
        this.$router.push({ path: "/vip" });
      }
    },
    // Toast.success('成功文案');
    paySuccess() {
      Toast.success("支付成功,正在跳转...");
      this.$router.push({ path: "/ticketMine/2" });
    },
  },
  mounted() {
    this.id = this.$route.params.id;

    // console.log(this.id);
  },
  created() {},
};
</script>

<style lang="less" scoped>
@deep: ~">>>";
#payatonce {
  width: 100%;
  height: 138px;
  background-color: #ffffff;
  overflow: hidden;
}
.back {
  width: 124px;
  height: 100%;
  float: left;
  text-align: center;
  // vertical-align: middle;
}
.back .backer {
  width: 89px;
  height: 82px;
  margin: 25% auto;
  text-align: center;
  padding-left: 35px;
  border-right: 1px solid #e6e6e6;
}
.backer .return {
  width: 42px;
  height: 39px;
  display: block;
  background: url("../../assets/img/travel/return.png") no-repeat;
  background-size: 100% 100%;
}
.backer .title {
  display: block;
  font-family: PingFang-SC-Medium;
  font-size: 24px;
  line-height: 36px;
  color: #666666;
  margin-left: -35px;
  margin-top: 5px;
}
.pay {
  width: 626px;
  height: 100%;
  float: right;
  // background: yellow;
}
.pay .payer {
  width: 293px;
  height: 100%;
  float: left;
  text-align: center;
}
.payer span {
  display: inline-block;
  margin: 40px auto;
  font-family: PingFang-SC-Medium;
  font-size: 24px;
  line-height: 26px;
  color: #333333;
}
.payer .symbol {
  font-size: 24px;
  line-height: 58px;
  color: #bf8542;
}
.payer .sum {
  font-family: PingFang-SC-Bold;
  font-size: 36px;
  color: #bf8542;
  margin-top: 30px;
}
.pay .pay-btn {
  width: 333px;
  height: 100%;
  float: right;
  text-align: center;
  color: #824411;
}
@{deep}.van-button{
  margin: 25px auto;
  width: 307px;
	height: 96px;
  font-family: PingFang-SC-Bold;
	font-size: 32px;
	line-height: 16px;
  color: #824411;
}
</style>

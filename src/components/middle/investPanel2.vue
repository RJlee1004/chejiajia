<template>
  <div id="investpanel">
    <div class="money-sum">
      <ul>
        <li>
          购买数量<i>最多可购买10张</i>
          <span class="right-arrow"></span>
          <van-stepper
            v-model="value"
            max="10"
            disable-input
            input-width="20px"
            button-size="20px"
            theme="round"
            @change="onChange"
          />
        </li>
        <li>服务<span>卡券属于虚拟商品，不支持退换货</span></li>
        <li>
          商品金额<span>￥{{ panels.salePrice * value }}</span>
        </li>
        <li>
          优惠券
          <span class="right-arrow"></span>
          <span class="count-sign">暂无可用</span>
        </li>
        <li>
          应付金额<span>￥{{ panels.salePrice * value }}</span>
        </li>
      </ul>
    </div>
    <!-- 支付方式 -->
    <div class="payway">
      <van-radio-group v-model="radio">
        <ul>
          <li class="title">支付方式</li>
          <li>
            <span class="wechat"></span><span>微信支付</span>
            <van-radio name="1" checked-color="#e6b88c"></van-radio>
          </li>
          <li>
            <span class="alipay"></span><span>支付宝</span>
            <van-radio name="2" checked-color="#e6b88c"></van-radio>
          </li>
          <li>
            <span class="oil"></span><span>2500油量抵扣</span>
            <van-radio name="3" checked-color="#e6b88c"></van-radio>
            <i>当前可用3000油量</i>
          </li>
        </ul>
      </van-radio-group>
    </div>
    <div class="use_notice">
      <span class="title">使用须知</span>
      <!-- <span>1.内容内容内容内容内容内容内容</span> -->
      <span v-html="panels.useNotice">{{ panels.useNotice }}</span>
    </div>
  </div>
</template>
<script>
import axios from "@/utils/axios";
import Vue from "vue";
import { Col, Row } from "vant";
import { Stepper } from "vant";

Vue.use(Stepper);
Vue.use(Col);
Vue.use(Row);
export default {
  name: "investPanel",
  data() {
    return {
      id: "",
      radio: "1",
      value: 1,
      panels: [], //获取其他充值面板之上数据
      prices: [], //再次请求充值面额，并对应改变商品金额和支付方式
    };
  },
  methods: {
    // changeCount(productId) {
    //   axios.get("/product/details/" + productId).then((res) => {
    //     this.prices = res.data;
    //   });
    // },
    // buy() {},
    onChange() {
      this.$store.commit("setSum", this.panels.salePrice * this.value);
    },
  },
  components: {},
  mounted() {
    this.id = this.$route.params.id;
    axios.get("/product/details/" + this.id).then((res) => {
      this.panels = res.data;
      this.$store.commit("setSum", this.panels.salePrice * this.value);
    });
  },
};
</script>
<style lang="less" scoped>
@deep: ~">>>";
#investpanel {
  width: 700px;
  height: 100%;
  margin: 20px auto;
  background-color: #ffffff;
  border-radius: 20px;
  margin: 0 auto;
}
.type,
.mination {
  font-family: PingFang-SC-Bold;
  font-size: 30px;
  line-height: 58px;
  letter-spacing: -1px;
  color: #333333;
  margin-left: 31px;
  margin-top: 31px;
}
.mination {
  margin-top: 200px;
}
.typeUl,
.minaUl {
  list-style: none;
}
.typeUl li,
.minaUl li {
  float: left;
  width: 204px;
  height: 116px;
  background-color: #ffffff;
  border-radius: 6px;
  border: solid 2px #e3e4e5;
  box-sizing: border-box;
  margin-top: 32px;
  margin-left: 25px;
  text-align: center;
}
.typeUl li {
  line-height: 116px;
  font-size: 30px;
  color: #999999;
}
.minaUl li {
  display: block;
  height: 170px;
}
span {
  display: block;
}
.price {
  font-family: PingFang-SC-Bold;
  font-size: 30px;
  line-height: 58px;
  letter-spacing: -1px;
  color: #999999;
}
.sale {
  font-family: PingFang-SC-Medium;
  font-size: 28px;
  line-height: 58px;
  color: #999999;
}
.office {
  font-family: PingFang-SC-Regular;
  font-size: 24px;
  line-height: 40px;
  color: #999999;
  opacity: 0.6;
  text-decoration: line-through;
}
.money_sum {
  width: 700px;
  // height: 250px;
  height: 100%;
  background-color: #ffffff;
  border-radius: 20px;
  margin: 20px auto;
}
.money-sum ul,
.payway ul {
  list-style: none;
  width: 647px;
  height: 100%;
  margin: 0 auto;
  padding-top: 10px;
}
.money-sum li {
  font-family: PingFang-SC-Medium;
  font-size: 30px;
  line-height: 58px;
  color: #666666;
  vertical-align: middle;
}
.money-sum li i {
  font-style: normal;
  margin-left: 10px;
}
.money-sum span {
  display: block;
  float: right;
  font-family: PingFang-SC-Medium;
  font-size: 30px;
  line-height: 58px;
  color: #333333;
}
.right-arrow {
  width: 36px;
  height: 36px;
  background: url("../../assets/img/travel/arrow.png") no-repeat;
  background-size: 100% 100%;
  margin-top: 3px;
}
@{deep}.money-sum .van-stepper {
  float: right;
}
@{deep}.money-sum .van-stepper__plus {
  background-color: #e6b88c;
}
@{deep}.money-sum .van-stepper__minus {
  color: #e6b88c;
  background-color: #fff;
  border: 1px solid #e6b88c;
}
.payway {
  width: 700px;
  height: 376px;
  background-color: #ffffff;
  border-radius: 20px;
  margin: 20px auto;
}
.payway ul {
  padding-top: 34px;
}
.payway li {
  font-family: PingFang-SC-Medium;
  font-size: 30px;
  line-height: 26px;
  color: #333333;
  margin-top: 60px;
  overflow: hidden;
}
.payway span {
  display: block;
  margin-right: 22px;
  // width: 300px;
  float: left;
}
.payway .title {
  font-weight: bold;
  margin-bottom: 36px;
  margin-top: 0;
}
.payway .wechat,
.payway .alipay,
.payway .oil {
  width: 40px;
  height: 40px;
  background: url("../../assets/img/travel/微信支付.png") no-repeat;
  background-size: 100% 100%;
  float: left;
  margin-top: -3px;
}
.payway .alipay {
  background: url("../../assets/img/travel/支付宝.png") no-repeat;
  background-size: 100% 100%;
}
.payway .oil {
  background: url("../../assets/img/travel/加油.png") no-repeat;
  background-size: 100% 100%;
}
@{deep}.payway .van-radio {
  float: right;
}
.payway i {
  font-style: normal;
  font-family: PingFang-SC-Regular;
  font-size: 24px;
  line-height: 26px;
  color: #999999;
  display: inline-block;
  margin-top: 30px;
  margin-left: -210px;
}
.use_notice {
  width: 700px;
  height: 100%;
  background-color: #ffffff;
  border-radius: 20px;
  margin: 20px auto;
  padding-top: 33px;
}
.use_notice span {
  display: block;
  margin-left: 20px;
  font-family: PingFang-SC-Medium;
  font-size: 28px;
  line-height: 36px;
  color: #808080;
  width: 649px;
}
.use_notice .title {
  font-family: PingFang-SC-Bold;
  font-size: 30px;
  line-height: 58px;
  color: #333333;
  font-weight: bold;
}
</style>

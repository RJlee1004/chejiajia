<template>
  <div id="investpanel">
    <div class="panel">
      <div class="type">充值类型</div>
      <ul class="typeUl">
        <li>面值</li>
      </ul>
      <div class="mination">充值面额</div>
      <ul class="minaUl">
        <li
          v-for="(item, index) in panels"
          :key="index"
          @click="changeCount(item.productId)"
        >
          <span class="price">{{ item.productName }}</span>
          <span class="sale">售价{{ item.salePrice }}元</span>
          <span class="office">官方价{{ item.officialPrice }}元</span>
        </li>
      </ul>
    </div>
    <!-- <div class="moeny_sum">
      <van-row type="flex" justify="space-around">
        <van-col span="15">商品金额</van-col>
        <van-col>￥{{ prices.salePrice }}</van-col>
      </van-row>
      <van-row type="flex" justify="space-around">
        <van-col span="15">优惠券</van-col>
        <van-col>3张可用</van-col>
      </van-row>
      <van-row type="flex" justify="space-around">
        <van-col span="15">应付金额</van-col>
        <van-col>￥{{ prices.salePrice }}</van-col>
      </van-row>
    </div> -->
    <div class="money-sum">
      <ul>
        <li>
          商品金额<span>￥{{ prices.salePrice }}</span>
        </li>
        <li>
          优惠券
          <span class="right-arrow"></span>
          <span class="count-sign">3张可用</span>
        </li>
        <li>
          应付金额<span>￥{{ prices.salePrice }}</span>
        </li>
      </ul>
    </div>
    <!-- <div class="payway">
      <van-row type="flex" justify="space-around" v-if="prices.payTypeList">
        <van-col span="15">{{ prices.payTypeList[0].payName }}</van-col>
        <van-col>点击</van-col>
      </van-row>
      <van-row type="flex" justify="space-around" v-if="prices.payTypeList">
        <van-col span="15">{{ prices.payTypeList[1].payName }}</van-col>
        <van-col>点击</van-col>
      </van-row>
      <van-row type="flex" justify="space-around" v-if="prices.payTypeList">
        <van-col span="15">{{
          prices.orderIntegral + prices.payTypeList[2].payName
        }}</van-col>
        <van-col>点击</van-col>
      </van-row>
    </div> -->
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
      <span>{{ prices.useNotice }}</span>
    </div>
  </div>
</template>
<script>
import axios from "@/utils/axios";
import Vue from "vue";
import { RadioGroup, Radio } from "vant";
import { Col, Row } from "vant";

Vue.use(Col);
Vue.use(Row);
Vue.use(Radio);
Vue.use(RadioGroup);
export default {
  name: "investPanel",
  data() {
    return {
      id: "",
      panels: [], //获取中石化充值面板之上数据
      prices: [], //再次请求充值面额，并对应改变商品金额和支付方式
      radio: "2",
    };
  },
  methods: {
    changeCount(productId) {
      axios.get("/product/details/" + productId).then((res) => {
        this.prices = res.data;
        this.$store.commit("setSum", this.prices.salePrice);
      });
    },
  },
  components: {},
  mounted() {
    this.id = this.$route.params.id;
    console.log(this.id);
    axios
      .get("/product/list/agent", {
        productType: "RECHARGE",
        brandId: this.id,
      })
      .then((res) => {
        this.panels = res.data;
        // console.log(this.panels[0].productId);
        axios
          .get("/product/details/" + this.panels[0].productId)
          .then((res) => {
            this.prices = res.data;
            this.$store.commit("setSum", this.prices.salePrice);
          });
        // console.log(this.prices);
      });
  },
};
</script>
<style lang="less" scoped>
@deep: ~">>>";
#investpanel {
  width: 700px;
  height: 100%;
  border-radius: 20px;
  margin: 0 auto;
}
.panel {
  background-color: #ffffff;
  border-radius: 20px;
  padding-bottom: 20px;
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
// .mination {
//   margin-top: 200px;
// }
.typeUl,
.minaUl {
  height: 100%;
  list-style: none;
  overflow: hidden;
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
.minaUl span {
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
.money-sum {
  width: 700px;
  height: 150px;
  background-color: #ffffff;
  border-radius: 20px;
  margin: 20px auto;
  padding-bottom: 20px;
}
.money-sum ul,
.payway ul {
  list-style: none;
  width: 657px;
  height: 100%;
  margin: 0 auto;
}
.money-sum li {
  font-family: PingFang-SC-Medium;
  font-size: 30px;
  line-height: 58px;
  color: #666666;
  vertical-align: middle;
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
.money-sum .count-sign {
  width: 102px;
  height: 36px;
  background-color: #fffaf3;
  border-radius: 4px;
  border: solid 1px #e8b87b;
  font-family: PingFang-SC-Medium;
  font-size: 24px;
  text-align: center;
  line-height: 36px;
  color: #bf8542;
  // margin-right: 10px;
}
.payway {
  width: 700px;
  height: 376px;
  background-color: #ffffff;
  border-radius: 20px;
  margin: 20px auto;
  padding-bottom: 20px;
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
.pay_atonce {
  width: 750px;
  height: 138px;
  background-color: #ffffff;
}
.pay_atonce {
  height: 138px;
  position: absolute;
}
</style>

 <template>
  <div id="cards">
    <commonHead>卡券详情</commonHead>
    <div class="cards_cont">
      <div class="card-tab">
        <img :src="datas.typeLogo" alt="^.^" />
        <span>{{ datas.productName }}</span>
      </div>
      <div class="card-list">
        <div class="card" v-for="(item, index) in datas.count" :key="index">
          <ul>
            <li v-if="datas.cardResults[index].cardNumber">
              卡号
              <van-button
                round
                type="info"
                color="#eecdaa"
                replace
                size="mini"
                @click="copy(datas.cardResults[index].cardNumber)"
                >复制</van-button
              >
              <span>{{ datas.cardResults[index].cardNumber }}</span>
            </li>
            <li>
              卡密
              <van-button
                round
                type="info"
                color="#eecdaa"
                replace
                size="mini"
                @click="copy(datas.cardResults[index].cardPwd)"
                >复制</van-button
              >
              <span>{{ datas.cardResults[index].cardPwd }}</span>
            </li>
          </ul>
        </div>
        <div class="pay-btn">
          <van-button
            round
            type="info"
            color="#eecdaa"
            replace
            @click="goBuy(datas.productId)"
            plain="true"
            >继续购买</van-button
          >
          <van-button
            round
            type="info"
            color="#eecdaa"
            replace
            @click="seeOrder"
            plain="true"
            >查看订单</van-button
          >
        </div>
      </div>
      <div class="use_notice">
        <span class="title">使用须知</span>
        <span v-html="datas.useNotice">{{ datas.useNotice }}</span>
        <!-- <span v-html="panels.useNotice">{{ panels.useNotice }}</span> -->
      </div>
    </div>
  </div>
</template>
<script>
import axios from "../utils/axios";
import Vue from "vue";
import { Col, Row } from "vant";
import { Toast } from "vant";

Vue.use(Toast);
Vue.use(Col);
Vue.use(Row);
export default {
  name: "Cards",
  data() {
    return {
      card: "",
      datas: [],
    };
  },
  components: {
    commonHead: () => import("../components/head/commonHead"),
  },
  mounted() {
    this.card = this.$route.params.card;
    axios.get("/order/coupon/" + this.card).then((res) => {
      this.datas = res.data;
    });
  },
  methods: {
    //复制卡号或者密码
    copy(num) {
      console.log(num);
      Toast("复制成功");
    },
    goBuy(productId) {
      console.log(productId);
      this.$router.push({ path: "/goods/" + productId });
    },
    seeOrder() {
      this.$router.push({ path: "/ticketmine/1" });
    },
  },
};
</script>
<style lang="less" scoped>
@deep: ~">>>";
.cards_cont {
  background: #2a3e62;
  height: 100%;
  position: relative;
  padding-top: 40px;
  padding-bottom: 40px;
}
.card-tab {
  background: url("../assets/img/travel/detail-bg.png") no-repeat;
  background-size: 100% 100%;
  width: 698px;
  height: 150px;
  // position: absolute;
  margin: 0 auto;
}
.card-list {
  width: 698px;
  height: 100%;
  background-color: #ffffff;
  margin: 0 auto;
  padding-top: 20px;
}
.card-list .card {
  width: 630px;
  height: 189px;
  margin: 0 auto;
  margin-top: 25px;
  background: #faf2e5;
  border-radius: 20px;
}
.card-list .card:first-child {
  margin-top: 0;
}
.card ul {
  list-style: none;
  width: 560px;
  height: 189px;
  margin: 0 auto;
  padding-top: 15px;
}
.card li {
  margin-top: 30px;
  font-family: PingFang-SC-Medium;
  font-size: 30px;
  // line-height: 62px;
  color: #333333;
}
.card span {
  float: right;
  display: block;
  width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 100px;
}
@{deep}.card .van-button {
  width: 94px;
  height: 42px;
  float: right;
}
@{deep}.card .van-button .van-button__text {
  margin-right: 0;
}
// @{deep}.card .van-button:hover {
//   background: #e6b88c;
// }
.card-tab img {
  width: 90px;
  height: 90px;
  border-radius: 100%;
  background: red;
  margin-left: 40px;
  margin-top: 30px;
}
.card-tab span {
  display: inline-block;
  margin-left: 55px;
  margin-top: 35px;
  font-family: PingFang-SC-Medium;
  font-size: 30px;
  line-height: 58px;
  color: #333333;
}
.pay-btn {
  width: 600px;
  height: 170px;
  margin: 0 auto;
  border-bottom: dashed 1px #e3e4e5;
  padding-left: 40px;
}
@{deep}.pay-btn .van-button {
  width: 214px;
  height: 71px;
  margin-left: 40px;
  margin-top: 50px;
}
.use_notice {
  width: 700px;
  height: 100%;
  background-color: #ffffff;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  margin: 0px auto;
  padding-top: 33px;
  padding-bottom: 20px;
  margin-bottom: 40px;
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

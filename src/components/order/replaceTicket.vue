<template>
  <div id="replaceticket">
    <ul v-if="isAxios">
      <li v-for="(item, index) in orders" :key="index">
        <span class="ddLogo">
          <img :src="item.typeLogo" alt="^.^" />
        </span>
        <span class="ddTitle">{{ item.productName }}</span>
        <span class="ddStatus" :class="type[item.orderStatus].className">
          {{ type[item.orderStatus].status }}
        </span>
        <span class="splitLine"> </span>
        <span class="number"><i>订单号：</i>{{ item.orderNo }}</span
        ><span></span>
        <span class="timer"><i>购买时间：&emsp;</i>{{ item.createTime }}</span
        ><span></span>
        <span class="money"><i>实付款：￥</i>{{ item.orderActualPrice }}</span
        ><span></span>
        <van-button
          round
          plain
          hairline
          type="info primary"
          size="mini"
          color="#e6b88c"
          @click="toCards(item.orderNo)"
          >查看卡券</van-button
        >
      </li>
    </ul>
    <van-empty v-else image="network" description="网络开小差了" />
  </div>
</template>

<script>
import axios from "@/utils/axios";
export default {
  name: "replaceTicket",
  components: {},
  data() {
    return {
      type: {
        SUCCESS: {
          className: "grayColor",
          status: "交易成功",
        },
        FAIL: {
          className: "redColor",
          status: "已退款",
        },
        WAITING: {
          className: "yellowColor",
          status: "退款中",
        },
      },
      orders: [],
      isAxios: true,
    };
  },
  computed: {},
  methods: {
    toCards(no) {
      this.$router.push({ path: "/cards/" + no });
    },
  },
  mounted() {
    axios
      .get("/order/list/", {
        pageNumber: "1",
        pageSize: "10",
        brandType: "MERCHANDISE_COUPON",
        brandId: "",
      })
      .then((res) => {
        this.orders = res.data;
      })
      .catch((err) => {
        this.isAxios = false;
      });
  },
  created() {},
};
</script>

<style lang="less" scoped>
@deep: ~">>>";
#replaceticket {
  background: rgb(245, 246, 248);
}
ul {
  list-style: none;
  margin: 0 auto;
  width: 690px;
}
li {
  width: 690px;
  height: 274px;
  margin-top: 20px;
  vertical-align: center;
  position: relative;
  background-color: #ffffff;
	border-radius: 20px;
}
li:first-child {
  margin-top: 31px;
}
.ddLogo {
  display: block;
  background-size: 100% 100%;
  border-radius: 100%;
  width: 56px;
  height: 56px;
  margin: 19px 22px 19px 26px;
  float: left;
}
.ddTitle {
  display: block;
  width: 100%;
  font-family: PingFang-SC-Bold;
  font-size: 30px;
  color: #333333;
  top: 30px;
  left: 107px;
  position: absolute;
}
.ddStatus {
  font-size: 26px;
  position: absolute;
  left: 559px;
  top: 34px;
}
.grayColor {
  color: #999999;
}
.redColor {
  color: #ff6029;
}
.yellowColor {
  color: #bf8542;
}
.splitLine {
  display: block;
  width: 629px;
  border: 1px solid #ebebeb;
  position: absolute;
  top: 93px;
  left: 30px;
}
.number,
.timer,
.money {
  display: block;
  position: absolute;
  font-size: 26px;
  top: 126px;
  left: 31px;
}
.timer {
  top: 172px;
}
.money {
  top: 220px;
  color: #ff6029;
}
i {
  letter-spacing: 13px;
  font-style: normal;
}
.timer i {
  letter-spacing: 4px;
}
@{deep}.van-button{
  width: 132px;
	height: 44px;
  font-size: 26px;
  line-height: 16px;
  margin-left: 528px;
  margin-top: 120px;
}
</style>

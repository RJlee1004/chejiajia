<template>
  <div id="mine">
    <div class="header">
      <span>尊敬的车主</span>
      <span>油量值：0</span>
    </div>
    <div class="mine-list">
      <ul>
        <li @click="goTo(1)">
          <div class="content">
            <span class="list-logo one"></span>
            <span class="title">我的订单</span>
            <span class="arrow"></span>
          </div>
        </li>
        <li @click="goTo(2)">
          <div class="content">
            <span class="list-logo two"></span>
            <span class="title">我的卡券</span>
            <span class="arrow"></span>
          </div>
        </li>
        <li @click="goTo(3)">
          <div class="content">
            <span class="list-logo three"></span>
            <span class="title">我的优惠券</span>
            <span class="arrow"></span>
          </div>
        </li>
        <li @click="goTo(4)">
          <div class="content">
            <span class="list-logo four"></span>
            <span class="title">在线客服</span>
            <span class="arrow"></span>
          </div>
        </li>
      </ul>
    </div>
    <tab-bar></tab-bar>
  </div>
</template>


<script>
import Vue from "vue";
import { Toast } from "vant";

Vue.use(Toast);
export default {
  data() {
    return {
      id: "Mine",
    };
  },
  methods: {
    goTo(index) {
      if (index === 1) {
        Toast("敬请期待");
      } else if (index === 2) {
        this.$router.push({ path: "/ticketmine/" + index });
      } else if (index === 3) {
        Toast("敬请期待");
      } else {
        this.$router.push({ path: "/service" });
      }
    },
  },
  components: {
    tabBar: () => import("../components/foot/tabbar"),
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
.header {
  width: 100%;
  height: 116px;
  background: url("../assets/img/mine/minebg.png") no-repeat;
  background-size: 100% 100%;
  padding-top: 150px;
}
.header span {
  display: block;
  float: left;
  margin-left: 80px;
  font-size: 34px;
}
.header span:nth-child(2) {
  margin-left: 160px;
  font-size: 30px;
}
.mine-list {
  width: 100%;
  height: 500px;
}
.mine-list ul {
  width: 660px;
  height: 100%;
  margin: 0 auto;
  list-style: none;
}
.mine-list li {
  width: 100%;
  height: 125px;
  display: table;
  border-bottom: 1px solid #cccccc;
}
.mine-list .content {
  display: table-cell;
  height: 125px;
  font-size: 30px;
  vertical-align: middle;
}
.content span {
  display: inline-block;
  vertical-align: middle;
}
.content .list-logo {
  width: 36px;
  height: 38px;
  background: url("../assets/img/mine/mine-order.png") no-repeat;
  background-size: 100% 100%;
}
.mine-list .two {
  background: url("../assets/img/mine/mineOder.png") no-repeat;
  background-size: 100% 100%;
}
.mine-list .three {
  background: url("../assets/img/mine/car.png") no-repeat;
  background-size: 100% 100%;
}
.mine-list .four {
  background: url("../assets/img/mine/客服.png") no-repeat;
  background-size: 100% 100%;
}
.content .title {
  margin-left: 30px;
}
.content .arrow {
  width: 18px;
  height: 33px;
  background: url("../assets/img/mine/right-arrow.png") no-repeat;
  background-size: 100% 100%;
  background-position: 50% 50%;
  float: right;
  // margin-top: 3px;
}
</style>

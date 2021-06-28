<template>
  <div id="labeltab">
    <van-tabs v-if="isAxioss" v-model="active" @click="onClick" color="#bf8542">
      <van-tab
        v-for="(head, index) in agentHead"
        :key="index"
        :title="head.categoryName"
      >
      </van-tab>
    </van-tabs>
    <van-tabs v-if="isAxioss" @click="getTicket">
      <van-tab
        v-for="(title, index) in brandname1"
        :key="index"
        :title="title.brandName"
      >
        <ul>
          <li
            v-for="(key, index) in productCon.length"
            :key="index"
            @click="
              toGoods(productCon[index].productId, productCon[index].inStock)
            "
          >
            <div class="imgs">
              <img
                v-if="!productCon[index].inStock"
                src="../../assets/img/travel/soldOut.png"
                alt="^.^"
              />
              <img
                v-else
                :src="productCon[index].posterUrl"
                alt="^.^ ^.^"
                v-real-img="defaultImg"
              />
            </div>
            <div class="names">{{ productCon[index].productName }}</div>
            <div class="vips">
              <span class="rights">专享权益价</span>
              <span class="prices">￥{{ productCon[index].salePrice }}</span>
            </div>
            <div class="official">
              官方价￥{{ productCon[index].officialPrice }}
            </div>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
    <van-empty v-else image="network" description="网络开小差了" />
  </div>
</template>

<script>
import axios from "../../utils/axios";
import Vue from "vue";
import { Empty } from "vant";

Vue.use(Empty);
export default {
  name: "labeltab",
  components: {},
  props: {
    agentHeads: Array,
    brandnames1: Array,
    productCons: Array,
    isAxioss: Boolean,
  },
  data() {
    return {
      active: 0,
      agentHead: [],
      brandname1: [],
      productCon: [],
      defaultImg: 'this.src="' + require("../../assets/img/2021.png") + '"',
    };
  },
  watch: {
    agentHeads: function (newVal, oldVal) {
      this.agentHead = newVal;
      // console.log(this.agentHead);
    },
    brandnames1: function (newVal, oldVal) {
      this.brandname1 = newVal;
      // console.log(this.agentHead);
    },
    productCons: function (newVal, oldVal) {
      this.productCon = newVal;
      // console.log(this.agentHead);
    },
  },
  computed: {},
  methods: {
    onClick(index, title) {
      console.log(this.brandnames1[index].id);
      axios.get("/brand/list/agent/" + this.agentHead[index].id).then((res) => {
        this.brandname1 = res.data;
        this.getCommon(0);
      });
    },
    getTicket(index, title) {
      this.getCommon(index);
    },
    getCommon(index) {
      axios
        .get("/product/list/agent", {
          brandId: "" + this.brandname1[index].id,
          productType: "MERCHANDISE_COUPON",
        })
        .then((res) => {
          this.productCon = res.data;
        });
    },
    toGoods(goodId, inStock) {
      if (inStock) {
        this.$router.push({ path: "/goods/" + goodId });
      }
    },
  },
  mounted() {
    console.log(this.productCon);
  },
  created() {},
};
</script>

<style lang="less" scoped>
@deep: ~">>>";
@{deep}.van-tab__text {
  font-size: 30px;
}

ul {
  list-style: none;
}
li {
  height: 208px;
  margin-top: 2px;
  // background: rgba(255, 255, 255, 0.651);
  border-top: 1px solid rgba(146, 133, 133, 0.377);
  position: relative;
}
.imgs {
  width: 231px;
  height: 143px;
  box-sizing: border-box;
  border: 1px solid rgb(241, 217, 186);
  margin-left: 26px;
  margin-top: 31px;
  position: relative;
  float: left;
}
.imgs img {
  width: 114px;
  height: 114px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -57px;
  margin-left: -57px;
}
.names {
  height: 30px;
  font-size: 30px;
  line-height: 40px;
  margin-left: 288px;
  margin-top: 40px;
}
.vips {
  margin-left: 288px;
  margin-top: 12px;
}
.vips .rights {
  // display: inline-block;
  width: 108px;
  height: 28px;
  background-image: linear-gradient(90deg, #dead6a 0%, #f7cb96 100%),
    linear-gradient(#2a3062, #2a3062);
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  letter-spacing: -1px;
}
.vips .prices {
  font-size: 34px;
  color: #ed1414;
}
.official {
  font-size: 24px;
  color: #999;
  line-height: 40px;
  text-decoration: line-through;
  margin-left: 288px;
  margin-top: 12px;
}
</style>

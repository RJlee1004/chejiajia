<template>
  <div id="headertabgoods">
    <div class="card">
      <div class="card_logo">
        <!-- || cards.posterUrl -->
        <img class="oil" :src="cards.logoUrl" alt="" v-if="ID === '1'" />
        <img class="except_oil" :src="cards.posterUrl" alt="" v-else />
      </div>
      <div class="card_text" v-if="ID === '1'">{{ cards.brandName }}</div>
      <div class="card_text" v-else>{{ cards.productName }}</div>
      <!-- <span>{{ cards.brandId }}</span> -->
    </div>
  </div>
</template>
<script>
import axios from "@/utils/axios";
export default {
  name: "headerTabGoods",
  // props: {
  //   ID: String,
  // },
  data() {
    return {
      cards: [],
      ID: "",
    };
  },
  components: {},
  mounted() {
    this.ID = this.$route.params.id;
    if (this.ID === "1") {
      axios.get("/brand/info/" + this.ID).then((res) => {
        this.cards = res.data;
      });
    } else {
      axios.get("/product/details/" + this.ID).then((res) => {
        this.cards = res.data;
      });
    }
  },
};
</script>
<style lang="less" scoped>
@deep: ~">>>";
#headertabgoods {
  height: 205px;
  background-color: #535361;
  display: flex;
  align-items: center; /*定义body的元素垂直居中*/
  justify-content: center; /*定义body的里的元素水平居中*/
}
.card {
  width: 700px;
  height: 165px;
  background-color: #ffffff;
  border-radius: 15px;
  display: flex;
  align-items: center;
}
.card_logo {
  width: 96px;
  height: 96px;
  // background: #f4f4f4;
  border-radius: 100%;
  margin-left: 31px;
}
.oil {
  width: 96px;
  height: 96px;
  border-radius: 100%;
}
.except_oil {
  width: 230px;
  height: 100px;
}
.card_text {
  // height: 29px;
  font-size: 30px;
  line-height: 40px;
  color: #333333;
  margin-left: 191px;
}
</style>

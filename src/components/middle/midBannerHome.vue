<template>
  <div id="midbanner">
    <span>{{ travelNames.travelName }}</span>
    <ul>
      <li v-for="(img, index) in travelBanner" :key="index" @click="prompt">
        <a href="#"><img :src="travelBanner[index].logoUrl" alt="" /></a>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";

Vue.use(Toast);
export default {
  name: "midBanner",
  components: {},
  props: {
    travelBanner: {
      type: Array,
      required: true,
    },
    travelNames: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    prompt() {
      Toast("敬请期待");
    },
  },
  mounted() {},
  created() {
    // this.travelBanner.map((val, index) => {
    //   this.images.push(val.logoUrl);
    // });
  },
};
</script>

<style lang="less" scoped>
#midbanner {
  position: relative;
  width: 100%;
  height: 810px;
  // background: blue;
}
span {
  display: inline-block;
  font-family: PingFang-SC-Bold;
  font-size: 32px;
  line-height: 26px;
  margin-left: 30px;
  margin-top: 30px;
}
ul {
  list-style: none;
}
li {
  display: inline-block;
  width: 220px;
  height: 290px;
  margin-left: 19px;
  margin-top: 16px;
  box-shadow: 10px 10px 5px rgba(156, 160, 141, 0.747);
  background-color: #fff;
  border-radius: 0.16rem;
}
li:nth-child(1),
li:nth-child(4) {
  margin-left: 30px;
}
img {
  width: 220px;
  height: 290px;
}
</style>

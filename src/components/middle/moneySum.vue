 <template>
  <div id="moneysum">
    <van-row type="flex" justify="space-around">
      <van-col span="15">商品金额</van-col>
      <van-col>￥25.00</van-col>
    </van-row>
    <van-row type="flex" justify="space-around">
      <van-col span="15">优惠券</van-col>
      <van-col>3张可用</van-col>
    </van-row>
    <van-row type="flex" justify="space-around">
      <van-col span="15">应付金额</van-col>
      <van-col>￥25.00</van-col>
    </van-row>
  </div>
</template>
<script>
import Vue from "vue";
import { Col, Row } from "vant";

Vue.use(Col);
Vue.use(Row);
export default {
  name: "moneySum",
  data() {
    return {};
  },
  components: {},
  mounted() {},
};
</script>
<style lang="less" scoped>
@deep: ~">>>";
#moneysum {
  width: 700px;
  height: 250px;
  background-color: #ffffff;
  border-radius: 20px;
  margin: 20px auto;
}
</style>

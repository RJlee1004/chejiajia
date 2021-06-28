<template>
  <div class="error-container">
    <img src="@/assets/img/error.jpg" class="empty-img" />
    <p class="error-msg">页面无法访问，请检查访问环境并重试。</p>
    <p class="error-msg">注意：若多次出现该页面，请联系客服反馈</p>
    <!-- <p class="error-msg">注意：若多次出现该页面，请联系客服反馈</p> -->
  </div>
</template>
<script>
export default {
  name: "Error",
  data() {
    return {};
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.error-container {
  text-align: center;
  .empty-img {
    margin: 2.03rem 0 0.6rem;
    width: 2.67rem;
    height: 3.07rem;
  }
  .error-msg {
    font-size: 28px;
    color: #999;
    line-height: 44px;
  }
}
</style>

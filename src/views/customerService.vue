<template>
  <div class="customerservice">
    <div class="headers">
      <div class="content">
        <span class="logo"></span>
        <span class="title">在线客服</span>
        <span class="voice"></span>
      </div>
    </div>
    <div class="middler"></div>
    <div class="footer">
      <div class="contents">
        <input type="text" placeholder="很高兴为您服务，请描述您的问题" />
        <span class="add"></span>
        <span class="smile"></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "customerService",
  data() {
    return {};
  },
  mounted() {},
};
</script>
<style lang="less" scoped>
.headers {
  width: 100%;
  height: 150px;
  background: #f1783c;
  display: table;
}
.content {
  display: table-cell;
  height: 150px;
  vertical-align: middle;
}
.content span {
  display: inline-block;
}
.content .logo {
  width: 80px;
  height: 80px;
  background: url("../assets/img/mine/person-icon.jpg") no-repeat;
  background-size: 100% 100%;
  border-radius: 100%;
  float: left;
  margin-left: 20px;
}
.content .title {
  font-size: 30px;
  color: #ffffff;
  margin-left: 20px;
  line-height: 75px;
  float: left;
}
.content .voice {
  width: 48px;
  height: 48px;
  background: url("../assets/img/mine/喇叭.png") no-repeat;
  background-size: 100% 100%;
  border-radius: 100%;
  float: right;
  margin-right: 40px;
  margin-top: 14px;
}
.middler {
  height: 1050px;
  background: #f3f1f1;
}
.footer {
  width: 100%;
  height: 125px;
  // background: red;
  background: #ffffff;
  display: table;
}
.contents {
  display: table-cell;
  vertical-align: middle;
  height: 125px;
}
.contents input {
  width: 480px;
  height: 64px;
  border: 1px solid #f3f1f1;
  border-radius: 20px;
  background: #f3f1f1;
  margin-left: 20px;
  float: left;
}
.contents span {
  width: 64px;
  height: 64px;
  display: inline-block;
  margin-right: 40px;
}
.contents .smile {
  background: url("../assets/img/mine/笑脸.png");
  background-size: 100% 100%;
  float: right;
}
.contents .add {
  background: url("../assets/img/mine/加号.png");
  background-size: 100% 100%;
  float: right;
}
</style>

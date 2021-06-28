import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./utils";
import VueClipboard from "vue-clipboard2";
import store from './store/footStore';
Vue.config.productionTip = false;
Vue.use(VueClipboard);

Vue.filter("numberToFixed2", function (value) {
  if (!value) return "0.00";
  return value.toFixed(2);
});

Vue.directive('real-img', async function (el, bingding) {
  let imgURL = bingding.value;//获取图片地址
  if (imgURL) {
    let exist = await imageIsExist(imgURL);
    if (exist) {
      el.setAttribute('src', imgURL);
    }
  }
});

let imageIsExist = function (url) {
  return new Promise((resolve) => {
    let img = new Image();
    img.onload = function () {
      if (this.complete == true) {
        resolve(true);
        img = null;
      }
    }
    img.onerror = function () {
      resolve(false);
      img = null;
    }
  })
}

router.beforeEach((to, from, next) => {
  const self = Vue.prototype;
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = "橙券商城";
  }
  // 设置背景色
  if (to.meta.background === "gray") {
    document.querySelector("body").setAttribute("style", "background: #f5f6f8");
  } else {
    document.querySelector("body").setAttribute("style", "background: #fff");
  }
  const params = self.$util.parseQueryString();
  if (to.query.code && params.code) {
    self.$api.getToken(params.code).then(res => {
      if (res.code === 5000) {
        localStorage.setItem(`CQ_WX_MALL_TOKEN`, res.data);
        next();
      } else {
        self.$toast(res.msg);
      }
    });
    return;
  }

  next();
});

router.onError(error => {
  const pattern = /Loading chunk (\d)+ failed/g;
  const isChunkLoadFailed = error.message.match(pattern);
  const targetPath = router.history.pending.fullPath;
  if (isChunkLoadFailed) {
    router.replace(targetPath);
  }
  console.log("isChunkLoadFailed", isChunkLoadFailed, targetPath);
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");

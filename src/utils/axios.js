import Vue from "vue";
import axios from "axios";
import Qs from "qs";
import { baseURL } from "./ip";

const instance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json"
  }
});

// 设置请求头cookie不刷新
instance.defaults.withCredentials = true;

// 请求处理
instance.interceptors.request.use(
  function (config) {
    // let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjoiNzQxNlQwYlk1Z1hHTW9vYUlndXkrY0RyZmQvZzlTcHBhNVBwU04zUFV1Ym52b2dDTkxqVDRMNXR2Qjl4NEhtSy9aeFVJbXZKSCtFS1VEbmJON01rMWc9PSIsImlzcyI6IkNRX1dYX01BTExfQVBJIiwiZXhwIjoxNjE5NzUxMjU3fQ.f4IQ9BfGveMn5O3qe2BQ1Ekkl6cXtmFU3-7y71GJuuM";
    let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjoiNzQxNlQwYlk1Z1hHTW9vYUlndXkrY0RyZmQvZzlTcHBhNVBwU04zUFV1Ym52b2dDTkxqVDRMNXR2Qjl4NEhtSy9aeFVJbXZKSCtFS1VEbmJON01rMWc9PSIsImlzcyI6IkNRX1dYX01BTExfQVBJIiwiZXhwIjoxNjIwMjY1Nzc3fQ.Uu9q1-9k_mPYD0qrL-cHe4XKpCA9KublzbgljhVc5dw";
    // let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjoiNzQxNlQwYlk1Z1hHTW9vYUlndXkrY0RyZmQvZzlTcHBhNVBwU04zUFV1Ym52b2dDTkxqVDRMNXR2Qjl4NEhtSy9aeFVJbXZKSCtFS1VEbmJON01rMWc9PSIsImlzcyI6IkNRX1dYX01BTExfQVBJIiwiZXhwIjoxNjE5ODMzNjQ4fQ.OCwB4GQdhssy59nJgTj0hAci6sEzmz1Uifgzj17Vzzg"
    // let token = localStorage.getItem("CQ_WX_MALL_TOKEN");
    // const env = process.env.NODE_ENV;
    // if (env === "development") {
    //   token =
    //     "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjoiNTVBRTg3QTdDQkQ4MkJEMjZGNTEzMjEwNjYzQjAyMzYwNDUwMEI0Mzk0RkFGRjU5QjU4QjU5MDg1NTUyNDJCOTdBNDhEQ0RBN0QwRDI2NkMwODE1NTFDMjZEQjkyQTMwNkI1RDhGQzRGQ0RCOTBGRSIsImlzcyI6IkNRX1dYX01BTExfQVBJIiwiZXhwIjoxNjExNzE2NTA5fQ.TJJuwp85AXvgfg-viohNwd-wGgGjh720hVTLhW2y-BI";
    // }
    if (token) {
      config.headers["token"] = token; // 让每个请求携带自定义 token 请根据实际情况自行修改
    } else {
      delete config.headers["token"];
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

//错误处理
instance.interceptors.response.use(function (response) {
  if (response.status !== 200) {
    return catchStatusError(response.status);
  }
  if (response.data.code !== 5000) {
    return catchError(response.data);
  }
  return response.data;
}, catchError);

const catchStatusError = status => {
  switch (status) {
    case 400:
      Vue.prototype.$toast({
        type: "fail",
        message: "请求参数异常",
        duration: 1000
      });

      break;
    case 403:
      Vue.prototype.$toast({
        type: "fail",
        message: "无访问权限，请联系企业管理员",
        duration: 1000
      });
      break;
  }
  return Promise.reject();
};

const catchError = res => {
  switch (res.code) {
    case 1002:
      // token失效
      localStorage.removeItem("CQ_WX_MALL_TOKEN");
      window.location.href = location.origin + location.pathname + "#/404";
      return Promise.reject(res);
    case 5133:
      // 代理商不存在
      Vue.prototype.$toast({
        message: "授权失败，请刷新重试",
        duration: 1000,
        onClose: () => {
          window.location.href = location.origin + location.pathname + "#/404";
        }
      });
      return Promise.reject(res);
    case 5147:
      // 代理商余额不足失败的 5147
      Vue.prototype.$toast({
        message: "操作异常，请刷新重试或联系客服",
        duration: 1000,
        onClose: () => {
          // window.location.href = location.origin + location.pathname + "#/404";
        }
      });
      break;
    case 6999:
      // 跳特权卡页面
      window.location.href =
        location.origin + location.pathname + "#/privilege";
      return Promise.reject(res);
  }
  return Promise.resolve(res);
};

export default {
  get(url, params) {
    return instance({
      url: url,
      method: "get",
      params: params
    });
  },
  post(url, data) {
    return instance({
      url: url,
      method: "post",
      data: Qs.stringify(data),
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    });
  },
  postJson(url, data) {
    return instance({
      url: url,
      method: "post",
      data: data
    });
  }
};

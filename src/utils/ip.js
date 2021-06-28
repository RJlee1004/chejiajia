// const DEV_IP = "https://wx5.ejiaofei.com/api";

// const DEV_IP = "http://172.16.0.205:18971/api"; // 王岩
// const DEV_IP = "http://172.16.1.131:8971/api"; // 李林江
const DEV_IP = "http://172.16.1.131:18080/api_chejj"; // 张子旭
// const DEV_IP = "http://172.16.1.215:8971/api"; // 王瑶
// const DEV_IP = "http://172.16.1.85:8971/api"; // 王瑶
//
const env = process.env.NODE_ENV;
const vueEnv = process.env;

export const baseURL = env === "development" ? DEV_IP : vueEnv.VUE_APP_BASEURL;

export default {
  baseURL
};

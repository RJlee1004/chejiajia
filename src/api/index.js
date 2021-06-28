import axios from "@/utils/axios";

/**
 * 获取token
 * @param {} code 参数
 */
const getToken = code => {
  console.log(code);
  return axios.get(`/login/token/${code}`);
};

export default {
  getToken
};

import axios from "axios";
import { getToken } from "@/utils";
import { Message } from "element-ui";

const $axios = axios.create({
  // 配置基础路径
  baseURL: "",
  // 配置请求超时的时间10s
  timeout: 10000,
});

$axios.interceptors.request.use(
  (cg) => {
    const token = getToken("token");
    const config = cg || {};
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.url = process.env.NODE_ENV === "production" ? "" : config.url;
    config.method = config.method || "get";
    if (config.method !== "get") {
      config.headers.contentType = "application/json";
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

$axios.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response.data;
    }
    return null;
  },
  (error) => {
    if (error.response.code === "401") {
      Message.error("登录失效，请重新登录！");
    } else {
      Message.error("网络拥堵！");
    }
    return Promise.reject(error);
  }
);

export default $axios;

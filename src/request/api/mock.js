import request from "@/request";

export default {
  login: () => {
    return request({
      url: "/mock/login",
      method: "get",
    });
  },
};

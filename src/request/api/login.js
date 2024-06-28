import request from "@/request";

export default {
  login: () => {
    return request({
      url: "/login",
      method: "get",
    });
  },
};

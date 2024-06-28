import request from "@/request";

export default {
  test: () => {
    return request({
      url: "/test",
      method: "post",
    });
  },
};

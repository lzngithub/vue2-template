import Mock from "mockjs";

Mock.mock("/mock/test", "get", { code: 200, data: {} });

Mock.mock("/mock/login", "get", {
  code: 200,
  data: {
    name: "liang",
    id: "001",
  },
});

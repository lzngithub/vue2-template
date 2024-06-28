module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {},
  globals: {
    window: false,
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["@", "./src"], // 将'@'路径别名指向./src目录
        ],
        extensions: [".js", ".jsx", ".ts", ".tsx"], // 指定可解析的文件扩展名
      },
    },
  },
};

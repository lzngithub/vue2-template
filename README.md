# vue2-template

一个从 webpack5 搭起的 vue2 项目，可以直接用于开发。

关于怎么搭建一个 webpack5 项目，看 webpack5-template 项目。

## 增加对 vue2 的支持

安装：

- vue2：对 vue 语法的支持;
- vue-loader： 对 vue 文件的处理，要安装 vue2 对应的版本，具体对应的关系，去官网找，或者在项目依赖找。
- vue-template-compiler: 是 vue-loader 的依赖，处理 vue 模版部分的内容

```sh
npm i vue@2 vue-loader@15 vue-template-compiler@2
```

修改 webpack 配置：

```js
// webpack.config.js
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: './src/main.js'
  module: {
    rules: [
      {
        // 该loader要放在首位，不然会出错
        test: /\.vue$/i,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
```

修改项目结构：

```vue
<template>
  <div>App</div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>
```

```js
// ./src/main.js
import Vue from "vue";
import App from "./App.vue";

// eslint-disable-next-line no-new
new Vue({
  el: "#app",
  render: (h) => h(App),
});
```

运行 npm start 进行打包就好。

## 增加对 less 的支持

安装 less-loader

```sh
npm i less-loader
```

配置：

```js
module.exports = {
  entry: './src/main.js'
  module: {
    rules: [
      {
        test: /\.less$/i, // 匹配文件的正则
        use: [...commonCssLoader, "less-loader"], // 用到的loader
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
```

## 引入 element-ui

安装：

```sh
npm i element-ui -S
```

在 src/main.js 中增加

```js
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI, { size: "small", zIndex: 3000 });
```

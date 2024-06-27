const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin"); // 代码检查
const TerserPlugin = require("terser-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const isAnalyze = process.env.ANALYZE === "ANALYZE";

console.log(process.env.NODE_ENV);

const isProduction = process.env.NODE_ENV === "production";
const commonCssLoader = [
  isProduction ? MiniCssExtractPlugin.loader : "style-loader",
  "css-loader",
  "postcss-loader",
];
const mode = isProduction ? "production" : "development";

const config = {
  mode,
  entry: "./src/main.js", // 入口
  output: {
    // 输出
    filename: "js/[name].[contenthash:10].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[contenthash:10][ext][query]",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/i,
        loader: "vue-loader",
      },
      {
        test: /\.css$/i, // 匹配文件的正则
        use: commonCssLoader, // 用到的loader
      },
      {
        test: /\.less$/i, // 匹配文件的正则
        use: [...commonCssLoader, "less-loader"], // 用到的loader
      },
      {
        test: /\.html$/i, // 匹配文件的正则
        use: ["html-loader"], // 用到的loader
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // 以该文件为模板创建html文件
    }),
    new MiniCssExtractPlugin({
      // 对输出的css文件进行重命名
      filename: "css/[name].[contenthash:10].css",
    }),
    new ESLintPlugin({
      fix: true,
    }),
    new VueLoaderPlugin(),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({ extractComments: false }),
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      chunks: "async", // 代码分割时对异步代码生效，all：所有代码有效，inital：同步代码有效
      minSize: 30000, // 代码分割最小的模块大小，引入的模块大于 30000B 才做代码分割
      minChunks: 1, // 引入的次数大于等于1时才进行代码分割
      maxAsyncRequests: 6, // 最大的异步请求数量,也就是同时加载的模块最大模块数量
      maxInitialRequests: 4, // 入口文件做代码分割最多分成 4 个 js 文件
      cacheGroups: {
        // 缓存组配置，默认有vendors和default，缓存组的配置会继承或者覆盖splitChunks.*的所有选项
        vendors: {
          test: /[\\/]node_modules[\\/]/, // 控制缓存组选择的模块，省略选择所有，[\\/]是路径兼容性写法
          priority: -10, // 缓存优先级
          name: "venders",
        },
        lodashVenodr: {
          // 将体积较大的lodash单独提取包，指定页面需要的时候再异步加载
          test: /lodash/,
          priority: -10,
          name: "lodashVenodr",
          chunks: "all",
        },
        default: {
          minChunks: 2, // 覆盖外层minChunks,用于提取被引用指定次数的公共模块，这里默认2次
          priority: -20,
          name: "common",
          reuseExistingChunk: true, // 是否重用已存在的chunk
        },
      },
    },
  },
};

if (!isProduction) {
  config.devServer = {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    compress: true,
    port: 9000,
    open: true,
    // 配置反向代理
    proxy: {
      "/api": {
        // http://localhost:8080/api/user -> http://***.com/api/user
        target: "http://***.com",
        // http://localhost:8080/api/user -> http://***.com/user
        pathRewrite: {
          "^/api": "",
        },
        // 开启跨域请求代理
        changeOrigin: true,
      },
    },
  };
  config.devtool = "eval-cheap-module-source-map";
}

if (isAnalyze) {
  config.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = config;

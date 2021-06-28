const isProd = process.env.VUE_APP_NODE_ENV === "production";
console.log("isProd: ", isProd);
// 这是项目发布阶段需要用到的 babel 插件
const prodPlugins = [];
if (isProd) {
  prodPlugins.push([
    "transform-remove-console",
    { exclude: ["error", "warn"] }
  ]);
}
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        style: true
      },
      "vant"
    ],
    // 生产环境下清除console打印
    ...prodPlugins
  ]
};

Webpack 的配置比较复杂，很容出现错误，下面是一些通常的故障处理手段。

一般情况下，webpack 如果出问题，会打印一些简单的错误信息，比如模块没有找到。我们还可以通过参数 --display-error-details 来打印错误详情。

$ webpack --display-error-details

Webpack 的配置提供了 resolve 和 resolveLoader 参数来设置模块解析的处理细节，resolve 用来配置应用层的模块（要被打包的模块）解析，resolveLoader 用来配置 loader 模块的解析。

当引入通过 npm 安装的 node.js 模块时，可能出现找不到依赖的错误。Node.js 模块的依赖解析算法很简单，是通过查看模块的每一层父目录中的 node_modules 文件夹来查询依赖的。当出现 Node.js 模块依赖查找失败的时候，可以尝试设置 resolve.fallback 和 resolveLoader.fallback 来解决问题。

module.exports = {
  resolve: { fallback: path.join(__dirname, "node_modules") },
  resolveLoader: { fallback: path.join(__dirname, "node_modules") }
};
Webpack 中涉及路径配置最好使用绝对路径，建议通过 path.resolve(__dirname, "app/folder") 或 path.join(__dirname, "app", "folder") 的方式来配置，以兼容 Windows 环境。
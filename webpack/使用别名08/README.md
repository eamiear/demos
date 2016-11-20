模块别名定义，方便后续直接引用别名，无须多写长长的地址，比如我们现在想要把scripts/jquery.min.jsjquery压缩文件打包.

别名（resolve.alias） 是 Webpack 的一个配置项，它的作用是把用户的一个请求重定向到另一个路径，例如通过修改 webpack.config.js 配置文件，jquery为别名加入：
resolve: {
  alias: {
      jquery: "./scripts/jquery.min.js"
  }
}
例如我们之前不用别名，在entry.js中，想要把jquery打包

require('./scripts/jquery.min.js');
设置别名，就可以修改为

require('jquery');
# loader

Webpack 本身只能处理 JavaScript 模块，如果要处理其他类型的文件，就需要使用 loader 进行转换。

Loader 可以理解为是模块和资源的转换器，它本身是一个函数，接受源文件作为参数，返回转换的结果。这样，我们就可以通过 require 来加载任何类型的模块或文件，比如 CoffeeScript、 JSX、 LESS 或图片。

先来看看 loader 有哪些特性？

Loader 可以通过管道方式链式调用，每个 loader 可以把资源转换成任意格式并传递给下一个 loader ，但是最后一个 loader 必须返回 JavaScript。
Loader 可以同步或异步执行。
Loader 运行在 node.js 环境中，所以可以做任何可能的事情。
Loader 可以接受参数，以此来传递配置项给 loader。
Loader 可以通过文件扩展名（或正则表达式）绑定给不同类型的文件。
Loader 可以通过 npm 发布和安装。
除了通过 package.json 的 main 指定，通常的模块也可以导出一个 loader 来使用。
Loader 可以访问配置。
插件可以让 loader 拥有更多特性。
Loader 可以分发出附加的任意文件。

Loader 本身也是运行在 node.js 环境中的 JavaScript 模块，它通常会返回一个函数。大多数情况下，我们通过 npm 来管理 loader，但是你也可以在项目中自己写 loader 模块。

按照惯例，而非必须，loader 一般以 xxx-loader 的方式命名，xxx 代表了这个 loader 要做的转换功能，比如 json-loader。

在引用 loader 的时候可以使用全名 json-loader，或者使用短名 json。这个命名规则和搜索优先级顺序在 webpack 的 resolveLoader.moduleTemplates api 中定义。

Default: ["*-webpack-loader", "*-web-loader", "*-loader", "*"]
Loader 可以在 require() 引用模块的时候添加，也可以在 webpack 全局配置中进行绑定，还可以通过命令行的方式使用。


# =============  样式Loader  =======================
css-loader 处理样式
style-loader将样式应用到CSS文件中
Loader应该进行本地安装（即安装时不加 `-g`）.   `npm install css-loader style-loader

# ============= 操作 ======================
require("!style!css!./style.css");

webpack\demo03> webpack entry.js bundle.js

绑定方式：
require("./style.css");
webpack\demo03> webpack entry.js bundle.js --module-bind 'css=style!css'
或者 webpack\demo03> webpack entry.js bundle.js --module-bind "css=style!css"
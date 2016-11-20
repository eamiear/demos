# 加载图片
对于样式中引用的图片，可以通过 url-loader 将图片作为模块处理。
安装url-loader
npm install url-loader

# 使用中，系统会报找不到"file-loader"的异常信息，安装"file-loader"即可

#配置 webpack.config.js 文件
module.exports = {
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module:{
        loaders: [
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.(png|jpg)$/, loader: 'url?limit=40000'}
        ]
    }
};
其中，limit表示图片小于该值时，webpack会自动将其转为base64编码的图片

#执行 webpack


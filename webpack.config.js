const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname + "/app/index.jsx"),
  output:{
    path:__dirname + "/build",
    filename:'bundle.js'
  },
  resolve:{
    extensions:['', '.js', '.jsx']
  },
  devServer:{
    colors:true,//终端中输出结果为彩色
    //contentBase: "./public",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true,//实时刷新
    hot:true //HotModuleReplacementPlugin插件需要配置的参数
  },
  module:{
    loaders: [
            { test: /\.json$/, exclude: /node_modules/, loader: 'json' },
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel' },
            { test: /\.less$/, exclude: /node_modules/, loader: 'style!css!postcss!less' },
            { test: /\.css$/, exclude: /node_modules/, loader: 'style!css!postcss' },
            { test:/\.(png|gif|jpg|jpeg|bmp)$/i, loader:'url-loader?limit=5000' },  // 限制大小5kb
            { test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader:'url-loader?limit=5000'} // 限制大小小于5k
        ]
  },
  postcss:[
    require('autoprefixer') //自动添加前缀的插件
  ],
  plugins:[
    new webpack.BannerPlugin('版权所有，翻版必究'),
    //热加载插件
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        })
  ]
}

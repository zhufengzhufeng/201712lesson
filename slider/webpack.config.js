let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry:'./src/index.js', // 入口
  output:{
    filename:'build.js',// 打包后的文件名
    path:require('path').resolve('./dist')
  },
  module:{
    rules:[
      {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
      {test:/\.css$/,use:['style-loader','css-loader']},
      {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
      {test:/\.(png|jpg|gif)$/,use:'url-loader'}
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./index.html'
    })
  ]
};
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const src = path.join(__dirname, 'src');
const dist = path.join(__dirname, 'dist');

module.exports = {
  mode: 'development', // developmentモードで実行します
  entry: path.resolve(src, 'js/render.jsx'), // ビルドを実行するファイルパス
  output: {
    filename: 'index.bundle.js', // 生成されるファイル名
    path: dist, // 生成先のディレクトリ
  },
  resolve: {
    modules: ['node_modules'], // import文のパス指定にnode_modulesを省略できるようにします
    extensions: ['.js', '.jsx'], // .jsまたは.jsxの拡張子を省略できるようにします
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      enforce: 'pre', // babel-loaderより前に実行する
      loader: 'eslint-loader',
    },
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }],
  },
  devServer: {
    contentBase: dist, // 開発サーバを立ち上げる参照ディレクトリ
    hot: true, // hot-reloadを有効にします
    port: 3000, // サーバを立ち上げるポート番号
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // hot-reloadを有効にするプラグイン
    new HtmlWebpackPlugin({
      // templateの設定を追加
      template: path.resolve(src, 'html/index.html'),
    }), // HtmlWebpackPlugin
  ],
};

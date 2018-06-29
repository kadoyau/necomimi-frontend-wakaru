const path = require('path');

const src = path.join(__dirname, 'src');
const dist = path.join(__dirname, 'dist');

module.exports = {
  mode: 'development', // developmentモードで実行します
  entry: path.resolve(src, 'js/index.js'), // ビルドを実行するファイルパス
  output: {
    filename: 'index.bundle.js', // 生成されるファイル名
    path: dist // 生成先のディレクトリ
  },
  resolve: {
    modules: ['node_modules'], // import文のパス指定にnode_modulesを省略できるようにします
    extensions: ['.js', '.jsx'] // .jsまたは.jsxの拡張子を省略できるようにします
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};

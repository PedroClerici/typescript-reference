const path = require('path');
     
module.exports = {
  mode: 'production',
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: 'none',
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/, },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, './'),
    }
  },
  resolve: {
    extensions: ['.ts', '.js'],
  }
};
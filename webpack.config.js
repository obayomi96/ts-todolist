const path = require('path')
const { config } = require('dotenv');

config();

const rules = [
  {
    test: /\.tsx?/,
    exclude: /node_modules/,
    loader: 'babel-loader'
  }
]

module.exports = {
  target: 'web',
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {rules},
  resolve: {extensions: ['.ts', '.tsx', '.js']},
  devServer: {
    static: './',
    port: process.env.PORT
  }
}

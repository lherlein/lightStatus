const path = require('path');
const isProduction = process.env.NODE_ENV == 'production';
const config = {
  entry: './bin/index.js',
  target: 'node',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'src', 'server', 'dist'),
  },
  plugins: [],
  module: {},
  externals: {},
  target: "node",
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }
  return config;
};
const path = require('path');
const { createConfig } = require('@edx/frontend-build');

var config = createConfig('webpack-dev', {
  entry: path.resolve(__dirname, 'example'),
  output: {
    path: path.resolve(__dirname, 'example/dist'),
    publicPath: '/',
  },
  resolve: {
    alias: {
      '@edx/frontend-component-footer': path.resolve(__dirname, 'src'),
    },
  },
});
config['devServer'].host = process.env.HOST ||'0.0.0.0';
config['devServer'].port = process.env.PORT || 8080;
config['devServer'].https = true;

module.exports = config;

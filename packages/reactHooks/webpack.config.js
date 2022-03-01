const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');

const PUBLIC_URL = 'lvh.me';
const port = 8080;

module.exports = (env) => {
  console.log('env: ', env);
  const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html',
    inject: 'body',
  });

  const InterpolateHtmlPluginConfig = new InterpolateHtmlPlugin({
    HtmlWebpackPlugin,
    PUBLIC_URL: '',
  });
  return {
    entry: './src/index.js',
    devServer: {
      host: PUBLIC_URL,
      port,
      https: false,
    },
    output: {
      path: path.resolve('dist'),
      filename: 'index_bundle.js',
    },
    devtool: 'inline-source-map',
    mode: 'development',
    resolve: {
      extensions: ['.ts', '.js', '.jsx'],
      modules: [
        path.resolve(__dirname + '/src'),
        path.resolve(__dirname + '/node_modules'),
        path.resolve(__dirname + '../../../node_modules'),
      ],
    },
    plugins: [HtmlWebpackPluginConfig, InterpolateHtmlPluginConfig],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.js$/,
          enforce: 'pre',
          use: ['source-map-loader'],
        },
        {
          test: /\.js$/,
          enforce: 'pre',
          use: [
            {
              //needed to chain sourcemaps.  see: https://webpack.js.org/loaders/source-map-loader/
              loader: 'source-map-loader',
              options: {
                filterSourceMappingUrl: (url, resourcePath) => {
                  //  console.log({ url, resourcePath }) example:
                  // {
                  //  url: 'index.js.map',
                  //  resourcePath: '/repos/xlib-wsl/common/temp/node_modules/.pnpm/https-proxy-agent@5.0.0/node_modules/https-proxy-agent/dist/index.js'
                  // }

                  if (/.*\/node_modules\/.*/.test(resourcePath)) {
                    return false;
                  }
                  return true;
                },
              },
            },
          ],
        },
      ],
    },
  };
};

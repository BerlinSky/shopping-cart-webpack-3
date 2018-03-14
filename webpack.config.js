const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BabiliPlugin = require("babili-webpack-plugin");

const extractPlugin = new ExtractTextPlugin({
  filename: 'main.[chunkhash].css'
});

const providerPlugin = new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery'
})

const cleanWebPackPlugin = new CleanWebpackPlugin(['dist'])

const babelOptions = {
  presets:  [
    [ 'es2015', { modules: false } ],
    [ 'es2017' ]
  ],
  plugins: ['transform-runtime', 'transform-decorators-legacy', 'transform-class-properties', 'transform-object-rest-spread']
}

const entryConfig = {
  vendor: ['jquery', 'vue', 'select2'],
  index: [
    path.resolve(__dirname, './app/js/main.js'),
    path.resolve(__dirname, './app/sass/main.scss')
  ]
}

const outputConfig = {
  path: path.resolve(__dirname, 'dist'),
  filename: 'bundle.[name].[chunkhash].js'
}

const vueRules = {
  test: /\.vue$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'vue-loader'
    }
  ]
}

const jsRules = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader',
      options: babelOptions
    },
    {
      loader: 'eslint-loader'
    }
  ]
}

const tsRules = {
  test: /\.ts(x?)$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader',
      options: babelOptions
    },
    {
      loader: 'ts-loader'
    },
    {
      loader: 'tslint-loader',
      options: {
        'tsConfigFile': 'tsconfig.json'
      }
    }
  ]
}

const sassRules = {
  test: /\.scss$/,
  exclude: /node_modules/,
  use: extractPlugin.extract({
    use: [
      {
        loader: "css-loader",
        options: {
          sourceMap: true
        }
      },
      {
        loader: "postcss-loader",
        options: {
          sourceMap: 'inline'
        }
      },
      {
        loader: "sass-loader",
        options: {
          sourceMap: true
        }
      }
    ]
  })
}

const htmlRules = {
  test: /\.html$/,
  exclude: /node_modules/,
  use: ['html-loader']
}

const pugRules = {
  test: /\.pug$/,
  exclude: /node_modules/,
  use: [
    { loader: 'html-loader' },
    { loader: 'pug-html-loader',
      options: {
        name: '[name],[ext]'
      }
    }
  ]
}

const fontRules = {
  test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
  exclude: '/app/images/',
  use: [
    {
      loader: 'file-loader',
      options: {
          name: '[name].[ext]',
          outputPath: 'fonts/'
        }
    }
  ]
}

const imageRules = {
  test: /\.(jpg|png|ico|svg)$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'images/',
      }
    }
  ]
}

module.exports = (env = {}) => {
  // Variables set by npm scripts in package.json
  const isProduction = env.production === true

  const minifyPlugin = new webpack.LoaderOptionsPlugin({
    minimize: (isProduction) ? true : false,
    debug: (isProduction) ? false : true
  })

  const environmentSetting = (isProduction) ? '"production"' : null;

  const runBabiliPlugin = () => {
    // return (isProduction) ? 'hidden-source-map' : 'cheap-module-eval-source-map'
    return (isProduction) ? new BabiliPlugin() : null;
  }

  const test = '"production"';

  return {
    entry: entryConfig,
    output: outputConfig,

    devtool: (() => {
      // return (isProduction) ? 'hidden-source-map' : 'cheap-module-eval-source-map'
      return (isProduction) ? '' : 'cheap-module-eval-source-map'
    })(),

    module: {
      rules: [ vueRules, jsRules, sassRules, htmlRules, pugRules, fontRules, imageRules ]
    },

    resolve: {
      extensions: [".tsx", ".ts", ".js", '.vue', '.json'],
      alias: {
        '@': path.resolve( __dirname, '..' )
      }
    },

    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: environmentSetting
        }
      }),
      // environmentSetting,
      runBabiliPlugin,

      extractPlugin,
      providerPlugin,
      cleanWebPackPlugin,

      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'vendor.js'
      }),

      new HtmlWebpackPlugin({
        favicon: 'app/favicon.png',
        template: 'app/landing.html',
        filename: 'index.html',
        chunk: ['index']
      }),

      new HtmlWebpackPlugin({
        favicon: 'app/favicon.png',
        template: 'app/index.html',
        filename: 'index-desktop.html',
        chunk: ['index']
      }),

      new HtmlWebpackPlugin({
        favicon: 'app/favicon.png',
        template: 'app/payment.html',
        filename: 'payment.html',
        chunk: ['index']
      }),

      new HtmlWebpackPlugin({
        favicon: 'app/favicon.png',
        template: 'app/payment-with-coupon.html',
        filename: 'payment-with-coupon.html',
        chunk: ['index']
      }),

      new HtmlWebpackPlugin({
        favicon: 'app/favicon.png',
        template: 'app/address.html',
        filename: 'address.html',
        chunk: ['index']
      }),

      new HtmlWebpackPlugin({
        favicon: 'app/favicon.png',
        template: 'app/invoice.html',
        filename: 'invoice.html',
        chunk: ['index']
      }),

      // minifyPlugin
    ],

    devServer: {
      host: 'localhost',
      port: 7000,
      open: true,
      historyApiFallback: true,
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
      }
    }

  }
};

var webpack = require('webpack')

module.exports =  {
  entry:'./app/src/main.js',
  output: {
    path: "/app/.tmp",
    publicPath: "/app/",
    filename: "scripts.js",
    sourceMapFilename: "scripts.js.map"
  },
  devtool:'cheap-module-eval-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        // excluding some local linked packages.
        // for normal use cases only node_modules is needed.
        exclude: /node_modules|vue\/src|vue-router\//,
        loader: 'babel'
      },
      // {
      //   test: /\.scss$/,
      //   loaders: ['style', 'css', 'sass']
      // },
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  resolve: {
    modulesDirectories: ['node_modules']
  }
}

var webpack = require('webpack')

module.exports =  {
  entry:'./app/src/main.js',
  output: {
    path: "/dist/scripts",
    publicPath: "/dist/",
    filename: "scripts.js"
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ],  
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


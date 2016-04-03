var webpackConfig = require('./webpack/webpack.dev.js')
delete webpackConfig.entry

// karma.conf.js
module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    // this is the entry file for all our tests.
    files: ['test/unit/index.js'],
    // we will pass the entry file to webpack for bundling.
    preprocessors: {
      'test/unit/index.js': ['webpack']
    },
    colors:true,
    logLevel:config.LOG_INFO,
    reporters: ['progress'],
    // use the webpack config
    webpack: webpackConfig,
    // avoid walls of useless text
    webpackMiddleware: {
      noInfo: true
    },
    singleRun: true
  })
}

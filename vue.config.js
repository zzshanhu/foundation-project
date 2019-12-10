const CompressionWebpackPlugin = require('compression-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  assetsDir: './static',
  outputDir:
    process.env.VUE_APP_CURRENTMODE === 'production' ? 'dist' : 'dist-test',
  productionSourceMap: process.env.VUE_APP_CURRENTMODE === 'development',
  lintOnSave: process.env.VUE_APP_CURRENTMODE === 'development',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.0.25:8400',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    host: '',
    port: 8080
  },
  configureWebpack: config => {
    let plugins = [
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      })
    ]
    if (process.env.VUE_APP_CURRENTMODE !== 'development') {
      config.plugins = [...config.plugins, ...plugins]
      config.optimization = {
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              cache: true,
              parallel: true,
              compress: {
                drop_console: true,
                drop_debugger: true,
                arrows: false,
                collapse_vars: false,
                comparisons: false,
                computed_props: false,
                hoist_funs: false,
                hoist_props: false,
                hoist_vars: false,
                inline: false,
                loops: false,
                negate_iife: false,
                properties: false,
                reduce_funcs: false,
                reduce_vars: false,
                switches: false,
                toplevel: false,
                typeofs: false,
                booleans: true,
                if_return: true,
                sequences: true,
                unused: true,
                conditionals: true,
                dead_code: true,
                evaluate: true
              },
              mangle: {
                safari10: true
              }
            }
          })
        ]
      }
      config.performance = {
        hints: false
      }
    }
  },
  chainWebpack: config => {
    // config.optimization.splitChunks({
    //   cacheGroups: {}
    // })
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
  },
  // 构建时开启多进程处理 babel 编译
  parallel: require('os').cpus().length > 1
}

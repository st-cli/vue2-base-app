/*
 * @Description: vue.config.js
 * @Autor: houyueke
 * @Date: 2022-04-01 10:38:46
 * @LastEditors: houyueke
 * @LastEditTime: 2022-04-22 14:00:50
 */
const CompressionPlugin = require('compression-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

const {
  themeColor,
  linkColor,
  successColor,
  warningColor,
  errorColor,
  fontSizeBase,
  headingColor,
  textColor,
  textColorSecondary,
  disabledColor,
  borderRadiusBase,
  borderColorBase,
  boxShadowBase
} = require('./src/config/index')

function modifyVars() {
  return {
    'primary-color': themeColor, // 全局主色
    'link-color': linkColor, // 链接色
    'success-color': successColor, // 成功色
    'warning-color': warningColor, // 警告色
    'error-color': errorColor, // 错误色
    'font-size-base': fontSizeBase, // 主字号
    'heading-color': headingColor, // 标题色
    'text-color': textColor, // 主文本色
    'text-color-secondary': textColorSecondary, // 次文本色
    'disabled-color': disabledColor, // 失效色
    'border-radius-base': borderRadiusBase, // 组件/浮层圆角
    'border-color-base': borderColorBase, // 边框色
    'box-shadow-base': boxShadowBase // 浮层阴影
  }
}

module.exports = {
  lintOnSave: false, //保存时lint
  productionSourceMap: false, //打包是否生成source map 文件
  devServer: {
    proxy: {
      [process.env.VUE_APP_BASE_URL]: {
        target: process.env.VUE_APP_URL_TARGET,
        changeOrigin: true
        // pathRewrite: {
        //   ['^' + process.env.VUE_APP_BASE_URL]: ''
        // }
      }
    }
  },
  configureWebpack: {
    plugins: [
      new CompressionPlugin({
        algorithm: 'gzip',
        test: /\.js$|\.html$|\.css$/,
        minRatio: 0.8,
        threshold: 10240,
        deleteOriginalAssets: isProd ? true : false
      })
    ]
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: modifyVars(),
        javascriptEnabled: true
      }
    }
  }
}

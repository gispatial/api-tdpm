/*=========================================================================================
  File Name: vue.config.js
  Description: configuration file of vue
  ----------------------------------------------------------------------------------------
  Item Name: Tripcarte.Asia Dashboard Management Portal
  Author: TripcarteDev
  Demo Staging URL: https://tdmp-merchants.gispatial.vercel.app/
==========================================================================================*/


module.exports = {
  publicPath: '/',
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ],
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  }
}

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: { 
    proxy: 'http://localhost:9000/'
  },
  configureWebpack: {
    devServer: {
      headers: { "Access-Control-Allow-Origin": "*" }
    }
  },
  outputDir : 'docs'
})

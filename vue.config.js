const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  runtimeCompiler: true,
  transpileDependencies: true,
  devServer: { 
    proxy: 'http://localhost:9000/'
  },
  configureWebpack: {
    devServer: {
      headers: { "Access-Control-Allow-Origin": "*" }
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/blogRenewalTest/' : '/',
  outputDir : 'docs',
	css: {
		loaderOptions: {
      scss: {
        additionalData: 
          `
          @import "variables.scss"; 
          @import "mixins.scss";
        `
      }
    }
  }
})

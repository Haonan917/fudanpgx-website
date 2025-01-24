const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000/',  // 替换为你的后端 API 地址
        // target: 'http://127.0.0.1:5000/',  // 替换为你的后端 API 地址
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
        // rewrite:(path) => path.replace(/^\/api/, "")//重写路径,替换/api
      },
    },
  },
  // server:{
  //   proxy:{
  //     '/api':{
  //       target:"http://127.0.0.1:5000/", //跨域地址
  //       changeOrigin:true, //支持跨域
  //       rewrite:(path) => path.replace(/^\/api/, "")//重写路径,替换/api
  //     }
  //   }
  // }



})

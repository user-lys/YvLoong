// 此处的环境为webpack中devServer中的proxy环境
// 在此模块化使用commonjs
// 修改此处文件，一定要重启 npm start
const { createProxyMiddleware: proxy } = require('http-proxy-middleware')


// 导出
module.exports = app => {
  // 只要以api开头的uri地址，都匹配
  app.use('/api', proxy({
    target: 'http://localhost:9090',
    // 模拟请求为本机请求，修改host   host:localhost:9090
    changeOrigin: true,
    // 当请求的uri地址的前缀，和真实的地址前缀不统一时，进行替换
    pathRewrite: {
      '^/api': ''
    }
  }))
}

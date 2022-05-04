const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(createProxyMiddleware('login', {
    target: 'http://o395789203.goho.co/',
    secure: false,
    changeOrigin: true,

  }))



  /*
  
    app.use(createProxyMiddleware('/api', {
      target: 'http://172.16.136.249:8080',
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/api"
      }
    }))
  */
}

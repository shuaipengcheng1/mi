const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(createProxyMiddleware('/login', {
    target: 'http://o395789203.goho.co',
    secure: false,
    changeOrigin: true,

  }),createProxyMiddleware('/Submit',{
    target: 'http://o395789203.goho.co',
    secure: false,
    changeOrigin: true,
  }),createProxyMiddleware('/check',{
    target:"http://o395789203.goho.co",
    secure: false,
    changeOrigin: true,
  }),createProxyMiddleware('/getSide',{
    target:'http://o395789203.goho.co',
    secure: false,
    changeOrigin: true,
  }),createProxyMiddleware('/getCursel',{
    target:"http://o395789203.goho.co",
    secure: false,
    changeOrigin: true,
  }),createProxyMiddleware("/getPull",{
    target:"http://o395789203.goho.co",
    secure: false,
    changeOrigin: true,
  }))
//http://o395789203.goho.co/getSide
//http://o395789203.goho.co/getCursel
//http://o395789203.goho.co/getPull
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

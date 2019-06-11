module.exports = {
  configureWebpack: {
    // 扩展webpack
    devServer: {
      before (app) {
        // app就是一个express
        app.get('/api/goods', function (req, res) {
          res.json({
            list: [
              { text: '百万年薪架构师', price: 100 },
              { text: 'web全栈架构师', price: 80 },
              { text: 'Python爬虫', price: 60 }
            ]
          })
        })
      },
      proxy: {
        // easymock开头的请求，webpack帮你转发到target之上
        '/easymock': {
          target: ' https://www.easy-mock.com/mock/5cd4f9e043a6e36a6cc8583b/kaikeba',
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            '^/easymock': ''
          }
        }
      }
    }

  }
}

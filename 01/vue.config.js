module.exports = {
    configureWebpack: {
      // 扩展webpack
      devServer: {
        before(app) {
          app.get('/api/goods', function (req, res) {
            res.json({
              list: [
                { text: '百万年薪架构师', price: 100 },
                { text: 'web全栈架构师', price: 80 },
                { text: 'Python爬虫', price: 60 }
              ]
            });
          });
        }
      }
    }
  }
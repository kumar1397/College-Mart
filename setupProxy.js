const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://college-mart.onrender.com/',
      changeOrigin: true,
    })
  );
};

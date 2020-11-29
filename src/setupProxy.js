const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      // proxy할 주소, 즉, 백단의 주소를 적어줍니다.
      target: "https://margarets.pythonanywhere.com",
      changeOrigin: true,
      pathRewrite:{ '^/api/':'/' }

    })
  );
};
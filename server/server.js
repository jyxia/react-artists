var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('../webpack.config')
var path = require('path');
var Express = require('express');
var port = 3000;

var app = new Express();
var isDevelopmentEnvironment = (process.env.NODE_ENV !== "production");

if (isDevelopmentEnvironment) {
  var compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

app.use(Express.static(path.resolve('./dist'), {
  dotfiles: 'ignore',
  index: false
}));

app.get("/", function(req, res) {
  res.sendFile(path.resolve('./src/index.html'));
});

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});

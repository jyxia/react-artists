var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('../webpack.config')
var path = require('path');
var Express = require('express');
var routes = require('./routes');
var port = 3000;

var app = new Express();
var isDevelopmentEnvironment = (process.env.NODE_ENV !== "production");

app.use(function(req, res, next) {
  // CORS middleware, allowing all just for demo
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

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
  if (isDevelopmentEnvironment) {
    res.sendFile(path.resolve('./src/index.html'));
  } else {
    res.sendFile(path.resolve('./dist/index.html'));
  }
});

// set up routes here
routes.artists(app);

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});

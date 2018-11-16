var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', "*");
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
  });

app.set('secret', 'portalfzl');

app.use(express.static('./public'));
app.use(bodyParser.json());

consign({cwd: 'app'})
	.include('models')
	.then('api')
	.then('routes/authRoute.js')
	.then('routes')
	.into(app);

app.all('/*', function(req, res) {
    res.sendfile(path.resolve('public/index.html'));
  });

module.exports = app;

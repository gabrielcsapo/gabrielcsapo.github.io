'use strict';
var path = require('path');
var session = require('express-session');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var compress = require('compression');
var moment = require('moment');

module.exports = function(app, next){

    global.cache = {};

    app.use(compress());
    app.use(serveStatic(path.join(__dirname, '../public')));
    app.set('view engine', 'jade');
    app.set('views', path.join(__dirname, '../public'));
    app.use(session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: true
    }));

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    next();

};

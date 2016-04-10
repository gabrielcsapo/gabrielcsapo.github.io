'use strict';
var path = require('path');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var compress = require('compression');

module.exports = function(app, next){

    global.cache = {};

    app.use(compress());
    app.use(serveStatic(path.join(__dirname, '../public')));
    app.set('view engine', 'jade');
    app.set('views', path.join(__dirname, '../public'));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    next();

};

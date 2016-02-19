'use strict';
var logger = require('./log').logger;
var responseTime = require('response-time');
var path = require('path');
var session = require('express-session');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var compress = require('compression');
var moment = require('moment');

module.exports = function(app, next){
   
    app.use(responseTime(function (req, res, time) {
        logger.log('request', {
            method: req.method,
            url: req.originalUrl,
            meta: {
                language: req.headers['accept-language'],
                agent: req.headers['user-agent'],
                referer: req.headers['referer'] || '',
                id: req.headers['x-forwarded-for'] || req.connection.remoteAddress
            },
            time: time
        });
    }));

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

    app.use(function(req, res, next) {
        if (!process.env.DEV && global.cache[req.url] !== undefined && req.method == 'GET') {
            logger.log('cached:returned', {
                url: req.url
            });
            if(global.cache[req.url].type == 'Buffer') {
                res.write(global.cache[req.url].response)
                res.end();
            } else {
                res.send(global.cache[req.url].response)
            }
        } else {
            logger.log('cached:missed', {
                url: req.url
            });
            next();
        }
    });
    next();

};

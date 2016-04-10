var fs = require('fs');
var path = require('path');

module.exports = function(app) {

	app.get('/', function(req, res) {
		res.render('index', function(err, html) {
			res.send(html);
		});
	});

};

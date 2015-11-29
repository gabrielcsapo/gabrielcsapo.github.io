module.exports = function(app) {

	app.get('/', function(req, res) {
		res.render('index', function(err, html) {
			// global.cache[req.originalUrl] = {
			// 	response: html,
			// 	type: 'html'
			// };
			res.send(html);
		});
	});

};
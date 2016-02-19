var fs = require('fs');
var path = require('path');

module.exports = function(app) {

	app.get('/', function(req, res) {
		res.render('index', function(err, html) {
			global.cache[req.originalUrl] = {
				response: html,
				type: 'html'
			};
			res.send(html);
		});
	});

	app.get('/articles/:link', function(req, res) {
		var link = req.params.link;
		var post = global.db('posts')
					  .chain()
					  .find({link: link})
					  .value();
		res.render('post', {
			post: post 
		}, function(err, html) {
			global.cache[req.originalUrl] = {
				response: html,
				type: 'html'
			};
			res.send(html);
		});
	});

	app.get('/articles', function(req, res) {
		var posts = global.db('posts').value();
		posts.forEach(function(post) {
			if(post.type == 'img' && post.file !== undefined && post.src == undefined) {
				post.src = fs.readFileSync(path.join(__dirname, '../public', post.file)).toString('base64');
			}
		});
		res.render('articles', {
			posts: posts 
		}, function(err, html) {
			global.cache[req.originalUrl] = {
				response: html,
				type: 'html'
			};
			res.send(html);
		});
	});

};
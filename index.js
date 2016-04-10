var express = require('express'),
    app = express(),
    port = 3000;

require('./lib/setup')(app, function() {

	require('./routes')(app);

	app.listen(port, function (err) {
	    console.log('[%s] Listening on http://localhost:%d', app.settings.env, port);
	});

});

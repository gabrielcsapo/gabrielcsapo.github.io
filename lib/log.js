var moment = require('moment');

module.exports.logger = {
	log: function(name, payload) {
		global.db('log').insert({
			event: name,
			payload: payload,
			time: moment().format('x')
		});
	}	
}
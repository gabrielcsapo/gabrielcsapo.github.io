'use strict';
var mysql = require('mysql2');
var Q = require('q');

var pool = function(){}
var results = {}

module.exports.config = function (config) {
    pool = mysql.createPool(config);

    function keepAlive(){
	  pool.getConnection(function(err, connection){
	    if(err) { 
	    	console.log(err);
	    	return; 
		}
	    connection.ping();
	    connection.release();
	  });
	}

    setInterval(keepAlive, 20000);
}

pool.query = function (sql, attributes) {
	if(results[sql]) {
		results[sql]++
	} else {
		results[sql] = 1
	}
	var deferred = Q.defer();
	pool.getConnection(function(err, connection) {
		var result = connection.query(sql, attributes, 
			function(error, rows) {
		    	connection.release();
		    	console.log(result.query)
		    	if(error) {
		    		deferred.reject(new Error(error));
		    	} else {
		    		deferred.resolve(rows);
		    	}
		  	}
		);
	});
	return deferred.promise;
}

pool.data = function() {
	return results;
}

exports.pool = pool;
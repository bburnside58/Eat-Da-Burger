//Just the queries here `selectAll()`, `insertOne()`, `updateOne()`
//I'm keeping the query so generic for best practice purposes, 
//I can simply pass different values into the function in the future if I need different data queries without changing the query, just add a new function with new parameters in controller.js
var connection = require('./connection.js');

var orm = {
    selectAll: function(tableInput, colToSearch, valOfCol) {
    	return new Promise(function(resolve, reject) {
	        var queryString = 'SELECT * FROM ' + tableInput + ' WHERE ' + colToSearch + ' = ?';

	        connection.query(queryString, [valOfCol], function(err, result) {
	            resolve(result);
	        });
    	});
    }

    insertOne: function()
    updateOne: function()
};

module.exports = orm;
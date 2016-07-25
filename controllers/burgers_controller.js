//I believe this is where routes go, export them to server.js
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

// LOAD DATA
// We are linking our routes to a series of "data" sources. 
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var callOrmFunctions = require('../models/burger.js');
//burgers.js
var orm = require('../config/orm.js');




var routes = function(app){
	app.get('/', function(req, res) {
    	// orm.selectAll();
    	orm.selectAll('burgers', 'devoured', 'true').then(function(data) {
			console.log(data);
			console.log("Hello")
			res.render('index', {
	            burgers: data
	        });
		});
    });
};

module.exports = routes;
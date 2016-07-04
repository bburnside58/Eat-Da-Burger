 //call the orm functions, will be exporting to burgers_controller.js
var orm = require('../config/orm.js');

var callOrmFunctions = {

	orm.selectAll('burgers', 'devoured', 'true').then(function(data) {
		console.log(data); //
	});

	orm.selectAll('burgers', 'devoured', 'false').then(function(data){
		console.log(data);
	});
};


module.exports = callOrmFunctions;
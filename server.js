var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var app = express();

var PORT = process.env.PORT || 8080;

// BodyParser makes it easy for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


var routes = require('./controllers/burgers_controller.js')(app); 


app.listen(PORT, function() {
    console.log("Listening on PORT %d", PORT);
});
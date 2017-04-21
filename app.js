/****************************************
Adding express and making an instance. 
****************************************/
var express = require('express');

var app = express();

/****************************************
Adding Handlebars
****************************************/
var handlebars = require('express-handlebars')
	.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

/****************************************
Endpoints 
****************************************/

app.get('/', function(req, res) {
	res.render('home');
});

app.get('/contact', function(req, res){
    res.render('contact');
});

app.get('/resume', function(req, res){
    res.render('resume');
});

/****************************************
404 error handler (midleware)
****************************************/
app.use(function(req, res, next){
	res.status(404);
	res.type('text/plain'); 
	res.send('404'); 
});

/****************************************
500 error handler (midleware)
****************************************/
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.type('text/plain'); 
	res.send('500'); 
});
/****************************************
App Listener 
****************************************/
app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' + 
    app.get('port') + '; press Ctrl-C to terminate.' );
});

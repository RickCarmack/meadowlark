var express = require('express');
var app = express();

var handlebars = require('express-handlebars')
  .create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));
app.set('port', process.env.PORT || 8080);
app.get('/', function(req, res){
  res.render('home');
});
app.get('/about', function(req, res){
  res.render('about');
});
app.use(function(req, res, next){
  res.status(404);
  res.render('404');
});
app.use(function(err, req, res, next){
  console.log(err.stack);
  res.status(500);
  res.ender('500');
});
app.listen(app.get('port'), function(){
  console.log('Express Server started on port ' + app.get('port') + '; press ctrl-c to terminate.');
});

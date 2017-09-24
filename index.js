const express 		= require('express');
const bodyParser 	= require('body-parser');
const mongoose 		= require('mongoose');
var routes = require('./routes/api');

const app 	  = express();

mongoose.Promise 	= global.Promise;
mongoose.connect('mongodb://localhost/ninjago');


app.use(bodyParser.json());
app.use('/api', routes);
app.use(function(err, req, res, next){
	res.status(422).send({error: err.message});
});

app.listen(process.env.port || 4000, function(){
	console.log("port is running at 4000");
});
var express = require('express');
var mongo = require('mongoose');
var bodyParser = require('body-parser');
var Schema = mongo.Schema;
var app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongo.connect("mongodb://localhost/blog");

var userSchema = new Schema({
    nombre: String,
    correo: String,
    password: String
});

module.exports = mongo.model('User', userSchema);

var Autor = mongo.model('User');

var postSchema = {
  user: String,
  title: String,
  content: String,
  fecha: Date,
  tags: Array,
  autor: {type: Schema.ObjectId, ref: "User"}
};

module.exports = mongo.model("Post", postSchema);

app.use(
        "/",
        express.static(__dirname)
);

app.post("/register", function(req, res){
  console.log(red.bodyParser);
});

app.set('port', process.env.PORT || 3000);

var server = app.listen(process.env.PORT || 3000, function(){
	var host = server.address().address;
	var port = server.address().port;
});

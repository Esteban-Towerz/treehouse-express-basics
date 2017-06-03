'use strict';
// we need to requiere the module called express
// i can use the variable express to access all the methods and properties on the express modules:
var express = require('express');
var posts = require('./mock/posts.json');

// the app varaible is now going to be extended and alter as we continue, 
// what i mean by that, is that we’re going to assing different settings and routes 
// to this varaible and is now a central part of our application

// to turning object into an array
var postsLists = Object.keys(posts).map(function(value){ 
	return posts[value]
});

var app = express();

app.use('/static', express.static(__dirname + '/public')); // this is one of the few places where we were access the express module directly we access de module instead of the app variable

app.set('view engine', 'jade');
app.set('views', __dirname + '/templates');
// the first thing we’re gonna to do is set up the developer server using a listen method

app.get('/', function(req, res){ // request/response
	var path = req.path;
	res.locals.path = path // doing this is exactly the same of doing this: res.render('index', {path: path});
	res.render('index');   // don't worry about including the .jade extension since you already set the view engine.
});

app.get('/blog/:title?', function(req,res){
	var title = req.params.title;
	if (title === undefined) {
		res.status(503);
		res.render('blog', {posts: postsLists}); // was replace --> res.send('<h1>This page is under construction!</h1>');
	} else {
		var post = posts[title] || {};
		res.render('post', { post: post});
	}
});

app.listen(3000, function(){ //the port  // the listen method hava a callback function as a second parameter
	console.log("the frontend server is running in a port 3000...");
}); 
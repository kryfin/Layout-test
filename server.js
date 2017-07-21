// load the things we need
var express = require('express');
var app = express();
var path = require('path');

// set the view engine to ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
// use res.render to load up an ejs view file
// index page 
var A = [
        { name: 'Item A1'},
        { name: 'Item A2'},
        { name: 'Item A3' },
        { name: 'Item A4'},
        { name: 'Item A5'},
        { name: 'Item A6' },
    ];
 var B = [
        { name: 'List B1'},
        { name: 'List B2'},
        { name: 'List B3' },
        { name: 'List B4'},
        { name: 'List B5'},
        { name: 'List B6' },
    ];
app.get('/', function(req, res) {
	res.render('pages/index',{
        options: A
    });
});
app.get("/A", function (req, res) {
  	res.render('pages/index',{
        options: A
    });

});
app.get("/B", function (req, res) {
  	res.render('pages/index',{
        options: B
    });
    
});



app.listen(8080);

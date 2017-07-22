var express = require('express');
var app = express();
var path = require('path');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
var A = [
        { name: 'Item A1'},
        { name: 'Item A2'},
        { name: 'Item A3' },
        { name: 'Item A4'},
        { name: 'Item A5'},
        { name: 'Item A6' },
    ];
app.get('/', function(req, res) {
	res.render('pages/index',{
        options: A
    });
});


app.listen(8080);

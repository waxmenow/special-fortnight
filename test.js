// server.js

// BASE SETUP
// ==============================================

var express = require('express');
var app     = express();
var port    =   process.env.PORT || 8080;
var router  = express.Router(); 
// ROUTES
// ==============================================
let MEMCACHE_URL = process.env.MEMCACHE_URL || 'mc3.dev.ec2.memcachier.com:11211';


var memjs = require('memjs');

var mc = memjs.Client.create(MEMCACHE_URL, {
  username: process.env.MEMCACHE_USER,
  password: process.env.MEMCAHCE_PW
});    

// the body parser is what reads post requests.
var bodyParser = require('body-parser');  
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: false }));


router.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

router.post('/registeruser', function (req, res) {  
  mc.set('foo', 'bar');
  var firstName = req.body.firstName;
  res.end('FIRSTNAME: ' + firstName);
});

router.post('/createScheduleRecord', function (req, res) {  
console.log("inside createScheduleRecord");
  mc.get('foo', function (err, value, key) {
    if (value != null) {
        console.log(value.toString());
    }
});
  var firstName = req.body.firstName;
  res.end('Password: ' + firstName);
});

app.use('/', router);

// we'll create our routes here

// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);

const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const mustache = require('mustache-express');

app.engine('mustache', mustache-express());
app.set('vews', './views');
app.set('view engine', 'mustache');

app.use('/our-first-app', express.static('our-first-app'));

// app.get('/',function(req, res) {
//   res.send("Hello world!");
// });

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname+'/index.html'));
// });

app.get('/', function(req, res){
  app.render('index', { name: 'Lila' } );
});

// app.get('/:something', function(req, res){
//   res.send(`The thing you wrote was ${req.params.something}`);
// });

app.listen(port, function(){
  console.log("The app is running on port 3000");
});

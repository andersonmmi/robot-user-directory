const express = require('express');
const app = express();
const port = 3000;

// app.get('/',function(req, res) {
//   res.send("Hello world!");
// });

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(port, function(){
  console.log("The app is running on port 3000");
});

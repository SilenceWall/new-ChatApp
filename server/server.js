const express = require('express');
const path = require('path');

var port = process.env.PORT || 9999;
var app = express();
var myPath = path.join(__dirname, '../public');
app.use(express.static(myPath));

app.get('/', (req, res)=>{
  res.send('hellow');
});

app.listen(port, ()=>{
  console.log('Ok, Server is ready');
});

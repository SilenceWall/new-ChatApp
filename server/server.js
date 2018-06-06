const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');
var port = process.env.PORT || 9999;
var app = express();
var myPath = path.join(__dirname, '../public');

app.use(express.static(myPath));

app.get('/', (req, res)=>{
  res.send('hellow');
});
var server = http.createServer(app);
var io = socketIO(server);
io.on('connection', (socket) => {
  console.log('connection established');


  socket.on('createMessage', (message)=>{
    io.emit('newMessage', {
      message: message.message,
      sender: message.sender
    });
  });
  socket.on('disconnect', ()=>{
    console.log('connection disconnected');
  });
});




server.listen(port, ()=>{
  console.log('Ok, Server is ready');
});

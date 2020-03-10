const app =require('express')();
const http =require('http').Server(app)
const io =require('socket.io')(http)

const PORT = 3000

http.listen(PORT,
  ()=>console.log(`Listening to port: ${PORT}`));

const messages=[];
const emitMessages= ()=>io.emit('chatMessage',messages)
io.on('connection',socket=>{
  console.log('A user is connected');

  emitMessages (messages);

  socket.on('chatMessage', message=>{
    messages.push(message)
    // console.log(message);
 emitMessages(messages)
  })
})

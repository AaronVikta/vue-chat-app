const app =require('express')();
const http =require('http').Server(app)
const io =require('socket.io')(http)

const PORT = 3000

http.listen(PORT,
  ()=>console.log(`Listening to port: ${PORT}`));

io.on('connection',socket=>{
  console.log('A user is connected');
})

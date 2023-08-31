const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index');
});

io.on('connection', () => {
    console.log('A user connected');

    // 사용자가 보낸 'chat message'신호와 데이터를 받고 받은 데이터를 다시 반대로 모든 사용자에게 'chat message'신호와 데이터를 보낸다.
    // 힌트 :

    // 사용자가 연결이 끊겼을때 신호를 받아서 Node.js에서 "A user disconnected"를 출력하자 
    // 힌트 : on , disconnect
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
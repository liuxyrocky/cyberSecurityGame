const express = require('express')
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
app.use(express.static('public'))


io.on('connection', socket => {
    socket.on('disconnect', reason => {

    });
    socket.on("send msg", data => {
        data.type = "other"
        socket.broadcast.emit("msg", data)
    })

});
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html')
})
app.get('/2048', function (req, res) {
    res.sendFile(__dirname + '/public/games/2048/index.html')
})
app.get('/hamster', function (req, res) {
    res.sendFile(__dirname + '/public/games/hamster/index.html')
})
app.get('/snake', function (req, res) {
    res.sendFile(__dirname + '/public/games/snake/index.html')
})
app.get('/tetris', function (req, res) {
    res.sendFile(__dirname + '/public/games/tetris/index.html')
})

http.listen(3000, function () {
    console.log('listening on http://127.0.0.1:3000');
});

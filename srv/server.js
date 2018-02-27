const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const bodyParser = require('body-parser');
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

console.log(path.join(`${__dirname}`, `../public`));
app.use(express.static(path.join(`${__dirname}`, `../public`)));

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var HandlerModule = require('./handler/handler');
var serverAPI = require('../src/routes/api');

let handler = new HandlerModule(io);
app.use('/api', serverAPI(handler));

app.get('/*', (req, res) => {
    res.sendFile(path.join(`${__dirname}`, `../public/index.html`));
});

server.listen(app.get('port'), () => {
    console.log('App is listening on port ' + app.get('port'));
});

const path = require('path');
const express = require('express');
const app = new express();

const server = require('http').createServer(app);

app.use('/', express.static(path.join(__dirname, 'resources')));

server.listen(5557);
console.log(`Production started at port 5557...`);

const port = parseInt(process.argv[2]) || 3030;
const http = require('http');
const express = require('express');

const app = express();

app.get('/', (req, res) => res.status(200).json({ message: 'Up and Running!' }));

const server = http.createServer(app);
server.listen(port);

console.log('Server listening on port ' + port);

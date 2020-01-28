'use strict'
const fs = require('fs');
const path = require('path');
const http = require('http');

const server = http.createServer(function (request, response) {
    fs.createReadStream(process.argv[3]).pipe(response);
})
server.listen(process.argv[2]);

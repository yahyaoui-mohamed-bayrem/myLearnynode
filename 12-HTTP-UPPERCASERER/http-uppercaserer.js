'use strict'
const fs = require('fs');
const path = require('path');
const http = require('http');
const map = require('through2-map');

const server = http.createServer(function (request, response) {
    if (request.method === 'POST') {
        request.pipe(map(function (chunk) {
            return chunk.toString().toUpperCase()
        })).pipe(response);
    }
})
server.listen(Number(process.argv[2]));


// const server = http.createServer(function (request, response) {
//     fs.createReadStream(process.argv[3]).toString().toUpperCase().pipe(response);
// })
// server.listen(process.argv[2]);
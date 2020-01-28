'use strict'
const fs = require('fs');
const path = require('path');
const net = require('net');

const server = net.createServer(function listener(socket) {
    const mydate = new Date();
    const year = mydate.getFullYear().toString();
    const month = mydate.getMonth().toString().length == 1 ? '0' + (mydate.getMonth()+1) : (mydate.getMonth()+1);
    const day = mydate.getDate().toString().length == 1 ? '0' + (mydate.getDate()) : (mydate.getDate());
    const h = mydate.getHours().toString().length == 1 ? '0' + (mydate.getHours()) : (mydate.getHours());
    const m = mydate.getMinutes().toString().length == 1 ? '0' + (mydate.getMinutes()) : (mydate.getMinutes());
    const data = year+'-'+month+'-'+day+' '+h+':'+m+'\n';
    socket.end(data);
})
server.listen(process.argv[2]);
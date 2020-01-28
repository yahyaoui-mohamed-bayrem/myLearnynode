'use strict'
const fs = require('fs');
const path = require('path');
const http = require('http');
for (let i=2;i<process.argv.length;i++)
{
    http.get(process.argv[i], function callback(response) {
        response.setEncoding('utf8');
        var data = "";
        response.on('data', (el) => {
            data = data+el;
        });
        response.on("end", () => {
            console.log(data);
        });
        response.on("err", function (err) {
            console.log(err);
        });
    }).on('error', console.error)
}

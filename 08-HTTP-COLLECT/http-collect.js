'use strict'
const fs = require('fs');
const path = require('path');
const http = require('http')

http.get(process.argv[2], function callback(response){
  response.setEncoding('utf8');
  var data = [];
  response.on('data', function (el) {
      data = [...data,el];
  });
  response.on("end", function () {
      console.log(data.join("").length);
      console.log(data.join(""));
  });
  response.on("err", function (err) {
    console.log(err);
});
}).on('error', console.error)

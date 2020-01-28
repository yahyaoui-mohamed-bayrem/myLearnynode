'use strict'
const fs = require('fs');

let myPathString = fs.readFileSync(process.argv[2]).toString();

console.log(myPathString.split('\n').length-1)
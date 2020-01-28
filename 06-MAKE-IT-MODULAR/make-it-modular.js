'use strict'
const myModule = require('./mymodule')

myModule(process.argv[2], process.argv[3], (err, list) => {
  if (err) throw err;
  list.forEach(function (file) {
    console.log(file);
  })
})

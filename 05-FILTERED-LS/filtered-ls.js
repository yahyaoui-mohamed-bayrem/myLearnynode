'use strict'
const fs = require('fs');
const path = require('path');


fs.readdir(process.argv[2], function (err, list) {
    if (err) return console.log(err)
    list.forEach(file => {if (path.extname(file) === '.' + process.argv[3]) { console.log(file) }})
  })



// fs.readdir(process.argv[2],'utf8', (err,list)=>{
//     if (err){
//         return console.log(err)
//     }
//     // list.map(el=>console.log(el.split('.')[1].toString()+' '+process.argv[3].toString().slice(1,process.argv[3].toString().length-1)))
//     list.filter(el=>el.split('.')[1]==process.argv[3].slice(1,process.argv[3].length-1)).map(el=>console.log(el))
//     // list.filter(el=>el.split('.')[1].toString()===process.argv[3].toString().slice(0)).map(el=>console.log(el))
// })



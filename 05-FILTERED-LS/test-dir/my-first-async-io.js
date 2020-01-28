'use strict'
const fs = require('fs');

fs.readFile(process.argv[2],'utf8', (err,myPathString)=>{
    if (err){
        return console.log('file error')
    }
    console.log(myPathString.split('\n').length-1)
})


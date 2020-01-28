'use strict'
const fs = require('fs');
module.exports = function (path, ext, callBackFunc) {
  fs.readdir(path, (err, list) => {
    const path = require('path');
    if (err) { return callBackFunc(err) }
    else {
      list = list.filter(function (file) {
        if (path.extname(file) === '.' + ext) return true;
      })
      return callBackFunc(null, list);
    }
  })
}

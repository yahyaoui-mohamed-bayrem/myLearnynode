'use strict'
const http = require('http');
function toTimestamp(year,month,day,hour,minute,second){
    var datum = new Date(Date.UTC(year,month-1,day,hour,minute,second));
    return datum.getTime();
   }

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json' , 'X-Powered-By': 'YAHYAOUI_Mohemd_Bayrem'})
    const { method, url } = request;
    if (method === 'GET') {
        if( url.includes('parsetime')){
            let time = url.split('T')[1].split('.')[0].split(':');
            let obj = {
                "hour": Number(time[0])+1,
                "minute": Number(time[1]),
                "second": Number(time[2])
              };
              response.write(JSON.stringify(obj));
              response.end();
        }
        if( url.includes('unixtime')){
            let time = url.split('T')[1].split('.')[0].split(':');
            let date = url.split('iso=')[1].split('T')[0].split('-');
            let milliseconds = Number(url.split('.')[1].split('Z')[0]);
            let objj = { "unixtime": toTimestamp(...date,...time)+milliseconds };
            response.write(JSON.stringify(objj));
            response.end();
        }
    }
}).listen(Number(process.argv[2]));

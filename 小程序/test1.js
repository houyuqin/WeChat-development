const http = require('http');

http.createServer((req,res)=>{
    var bodyData = '';

    if(req.method == 'POST' || req.method == 'PUT'){
        req.on('data',(data)=>{
            bodyData += data.toString('utf8');
        });
    }else{
        req.on('data',(data)=>{});
    }

    req.on('end',() => {

    });
}).listen(8080,'localhost');
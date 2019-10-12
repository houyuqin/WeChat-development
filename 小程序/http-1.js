const http = require("http");

http.createServer((req,res)=>{
    //输出请求头文件
    console.log(req.headers);
    
    res.end('Hello Node.js');
})
.listen(8080);
const http = require('http');
const fs = require('fs');
const server= http.createServer();
server.on('request',(req,res)=>{
    const rstream= fs.createReadStream('file.txt');
    rstream.pipe(res); 
});
server.listen(8080,()=>{console.log('file readed');});

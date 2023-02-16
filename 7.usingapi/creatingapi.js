const http = require('http');
const fs=require('fs');
http.createServer((req,res)=>{
     console.log(req.url);
    const data=fs.readFileSync(`${__dirname}/iris.json`,'utf-8');
    const objdata=JSON.parse(data);
    if(req.url=='/'){
        res.write(objdata[0].sepalLength);
        // res.end();
    }
   
   
}).listen(222,()=>{console.log("iam running")});
    
    
            
                
            
        
    
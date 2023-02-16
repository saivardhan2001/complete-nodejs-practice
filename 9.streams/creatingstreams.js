//Streaming way
    // reading from a stream
    // create a readable stream
    // handle stream events--> data,end and error
const http=require("http");
const fs=require("fs");
const server=http.createServer();
server.on("request",(req,res)=>{
    const rstream=fs.createReadStream("file.txt");
    rstream.on("data",(chunkdata)=>{
        res.write(chunkdata);
    });
    rstream.on("end",()=>{
        res.end();
    })
    rstream.on("error",(err)=>{
        console.log(err);
        res.end("file not found")
    });
});
server.listen(8888,()=>{console.log("file sucessfully readed")})

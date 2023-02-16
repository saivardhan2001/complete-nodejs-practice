// http module is a build in module in nodejs, where we can create a server.
const http=require("http")
http.createServer((req,res)=>{
     console.log(req.url);    //by using url we can print what we type in browser
    //  we can create routing, by using if, else if and else statements.
    if(req.url=="/"){
        res.end("<h1>Welcome to my Website, i hope you enjoyed..</h1>");
    } else if(req.url=="/about"){
        res.end("<h1>This is about Me....<h1>");
    }else {
        res.writeHead(404,{"Content-type":"text/html" });  
                              //writeHead is used to specify the HTTPS response.
                             // content-type is used to specify either it is text or document. By default it is document.
        res.end("<h1>404 error page. unable to fetch information</h1>");
    }
}).listen(8080,()=>{console.log("server started");});



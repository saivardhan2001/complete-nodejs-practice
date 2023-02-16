const express=require("express");
const app=express();
app.get("/www.vardhan.com",(req,res)=>{
    res.end("welcome to my website")
});
app.get("/hello",(req,res)=>{
    res.sendFile(__dirname+"/text.txt");
})
app.listen(8765,()=>{console.log("hello server is running....")})

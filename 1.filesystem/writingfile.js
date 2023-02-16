const fs=require("fs");
fs.writeFile("text.txt","Thank you for creating me....",(err)=>{
    console.log("hello written");
});
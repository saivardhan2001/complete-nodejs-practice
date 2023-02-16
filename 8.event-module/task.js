//1)Register for the event to be fired only one time using eventmodule.
const EventEmitter=require('events');
const event=new EventEmitter();
const fs = require('fs');
event.on('saymyname',()=>{
    console.log('Your Name Is Sai Vardhan...');
});
//2)creating a couple of callbacks.
event.on('pressme',()=>{
    fs.readFileSync('creatingevent.js','utf-8',(err,data)=>{
        console.log(data);
    });
});
 event.emit('pressme');
event.emit('saymyname');
//3) registering for the event with callback parameter.
event.on('checkpage',(sc,msg)=>{
    console.log(`status code is ${sc} and page is ${msg}`);
});
event.emit('checkpage',200,'ok');
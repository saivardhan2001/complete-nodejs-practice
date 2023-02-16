// Event Module
// It is a build in function, where we can create,fire,and listen for our own events
const EventEmitter=require('events');
const event=new EventEmitter();
//or above one much simpler
// const event=require("events")
// const EventEmitter=new event.EventEmitter();
event.on("sayMyName",()=>{                                         //event.on is used to define when we press
    console.log("Hello Your Name Is Vardhan")
})
event.emit("sayMyName")    
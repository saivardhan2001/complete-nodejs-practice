//1)convert the object into JSON
//2)add the data into another file
//3)read the file
//4)convert back to object
//5)print the object

// create a object
const specs={
    Name:"BMW",
    ID:2030,
    Place:"hyderabad"
};
// 1 convert the obj to json
const jsondata=JSON.stringify(specs);

// 2 fs to add the data into another file.
const fs = require('fs');
fs.writeFile('jsondata.json',jsondata,(err)=>{
    console.log('data added');
});

// 3 read file.
 fs.readFile('jsondata.json','utf-8',(err,data)=>{      
     //donot add double quots"", if you add you didn't output.
    // 4. convert back to object
    var objdata=JSON.parse(data);
    // 5. print object
console.log( objdata);
console.log("this is json data"+jsondata);
});


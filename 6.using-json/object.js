// Json stands for javascript object notation.
// Json is lightweight
// Format for storing and transporting data
// Json is often used when data is sent from a server to a web page
const  biodata={
    Name:"saivardhan",
    Id : 733,
    Place:"hyderabad"
}
// To convort object into JSON
// stringify is used to convort obj to json
const jsondata=JSON.stringify(biodata);
console.log(jsondata);
// To convort JSON into object
// parse is used to convort json to obj
const objdata=JSON.parse(jsondata);
console.log(objdata);




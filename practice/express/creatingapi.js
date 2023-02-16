// const express=require('express');
// const app=express();
// var nJwt = require('njwt');
// // app.get('/',(req,res)=>{
// //     // requestHandler(req,res);
// //     res.send('hello world');
// // });
// // app.listen(4000,()=>{console.log('iam running')});


// app.get('/jwt', (req, res) => {
//     // requestHandler(req, res);
//     // var privateKey = fs.readFileSync('./config/private.key');

//     // New MSO BI EMAIL campaign credentails
//     var Email_claims = {
//         "iss": "F6D93025512D2B0A0A490D44@AdobeOrg",
//         "sub": "539D5BBE5F2319E70A495C76@techacct.adobe.com",
//         "exp": 1585035838,
//         "https://ims-na1.adobelogin.com/s/ent_campaign_sdk": true,
//         "aud": "https://ims-na1.adobelogin.com/c/6aeac67e80044569a66b5e5a7a765ac5"
//     };

//     // PROD EMAIL CLAIM DETAILS
//     var Email_claims_PROD = {
//         "iss": "F6D93025512D2B0A0A490D44@AdobeOrg",
//         "sub": "06FB7D445F4EA5450A495C4A@techacct.adobe.com",
//         "exp": 1585035838,
//         "https://ims-na1.adobelogin.com/s/ent_campaign_sdk": true,
//         "aud": "https://ims-na1.adobelogin.com/c/5cd10a75a9fe4f8eba5bbbc3f483c77d"
//     };

//     var jwt = nJwt.create(Email_claims_PROD);
//     res.send({
//         jwt: `${jwt}`
//     })
// })
// app.listen(4000,()=>{console.log('iam running')});

const nJwt = require('njwt');

// Create a new JWT
var jwt = nJwt.create({
  sub: '1234567890',
  name: 'John Doe',
  iat: new Date().getTime() // current time
}, 'secretKey');

// Sign and encode the JWT
var token = jwt.compact();

console.log(token);

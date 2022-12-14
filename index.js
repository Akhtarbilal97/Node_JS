const express = require("express");
const  reqFilter = require('./middleware');
const app = express();


// restriction all page
// app.use(reqFilter);


app.get('',(req, resp)=>{
  resp.send("Welcome to bilal page");
});
//  Apply middleware on one page just add reqFilter after user
app.get('/user',reqFilter,(req, resp)=>{
   resp.send("Welcome to User Page");
 })


app.listen(5000);
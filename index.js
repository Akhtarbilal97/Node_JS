const express = require("express");
const app = express();

const reqFilter=(req,resp,next)=>{
   if(!req.query.age){
      resp.send("Please Provide Pagee");
   }

   else if(req.query.age<20){
      resp.send("You cant not access the page");
   }
   else{
      next();
   }

}
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
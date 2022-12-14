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
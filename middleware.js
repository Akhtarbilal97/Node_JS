module.exports = (req, resp,next)=>{
    if(!req.query.age){
        resp.send('Please Provide Age')
    }
    else if(req.query.age < 20){
        resp.send("You are Under Age!")
    }
    else{
        next();
    }
    
}
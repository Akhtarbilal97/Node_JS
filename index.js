const express = require('express');
const reqFilter = require('./middleware');
const app = express();

// restriction for All Pages
// app.use(reqFilter);


// restrict for Home page Only
app.get('/',reqFilter,(req, resp)=>{
    resp.send('Welcome to Home Page')
})

app.get('/help',(req, resp)=>{
    resp.send('Welcome to Help Page')
})
app.listen(5000);
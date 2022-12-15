// // const express = require('express');
// // const reqFilter = require('./middleware');
// const app = express();

// // restriction for All Pages
// // app.use(reqFilter);


// // restrict for Home page Only
// app.get('/',reqFilter,(req, resp)=>{
//     resp.send('Welcome to Home Page')
// })

// app.get('/help',(req, resp)=>{
//     resp.send('Welcome to Help Page')
// })
// // app.listen(5000);


// Connect NodeJS with Mongodb
const {MongoClient} = require('mongodb');
const url = 'mongodb://0.0.0.0:27017';
const client = new MongoClient(url);
const database = 'e-comm';

async function getData(){
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('product');
   let response = await collection.find({}).toArray();
   console.log(response);
}

getData();
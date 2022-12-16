// Connect NodeJS with Mongodb
const {MongoClient} = require('mongodb');
const url = 'mongodb://0.0.0.0:27017';
const client = new MongoClient(url);
const database = 'e-comm';

async function getData(){
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('product');
}
module.exports = getData;
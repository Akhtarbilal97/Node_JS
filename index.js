const getData = require('./mongodb');

// promises handle another method
const main = async()=>{
    let data = await getData();
    data = await data.find({}).toArray();
    console.log(data);
}
main();
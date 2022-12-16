// insert data from node js to Mongodb

const getData = require('./mongodb');
const insert = async ()=>{
    const data = await getData();
   const result = data.insertMany(
    // insert single Data
    // {name:'y25',model: 'vivo',price: 250,category: 'mobile'}

    // insert Multiple Data
    [
        {name:'y25',model: 'vivo',price: 230,category: 'mobile'},
        {name:'y26',model: 'vivo',price: 240,category: 'mobile'},
    ]
   );
   if(result.acknowledged){
    console.log("Data is Inserted");
   }
}
insert();
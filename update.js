const getData = require('./mongodb');

const update = async()=>{
    let data = await getData();
    let result = await data.updateOne(
        { name: 'y25'}, {
            $set: { name: 'samsung', price:700}
        }
        );
       console.warn(result);
}

update();
const getData = require('./mongodb');

const deleteData = async()=>{

    let data = await getData();
    let result = await data.deleteOne({name: 'sam'  });
    console.warn(result);

}

deleteData();
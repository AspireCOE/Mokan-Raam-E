var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://localhost:27017/";

const client = new MongoClient(uri);

var dbName = "DemoBB";

async function fun() {
    try{
        await client.connect();
        const db = client.db("DemoBB");
        const collection = db.collection("names");
        const findvar = collection.find({}).skip(187).limit(5);
        await findvar.forEach(record => {
            console.log(record);
        })
        const output = await collection.countDocuments({})
        console.log(output);
    }
    finally{
        await client.close();
    }
}

fun()
    .then(() => console.log("Database operation completed."))
    .catch((err) => console.error("Error during database operation:", err));


// console.log(uri+dbName)

// mongoClient.connect(uri+dbName, (connectError,connectResponse)=>{
//     if(connectError){
//         console.log("connectError");
//     }
//     else{
//         console.log("No connect Error");
//     }
// })
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

(async () => {
    let database;
    database = await MongoClient.connect("mongodb://127.0.0.1:27017").then((client) => {
        database = client.db('shop');
        if (!database) {
            console.log('Database not connected');
        }else {
            console.log('Database connected');
        }
        return database;
    });

    const collection = database.collection('orders');
    const orders = await collection.aggregate([
        {
            $lookup: {
                from: 'products',
                localField: 'product_ids',
                foreignField: '_id',
                as: 'orderProducts'
            }
        }
    ]).toArray()

    console.log(orders);
    console.log(JSON.stringify(orders));
})();
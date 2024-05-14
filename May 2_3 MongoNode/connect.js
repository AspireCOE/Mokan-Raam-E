//connection to mongodb and node js

const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://127.0.0.1:27017/DemoBB';

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to the MongoDB server
async function connectToMongoDB() {
    try {
        await client.connect();

        const db=client.db('DemoBB')
        const collection=db.collection('employees');

        // insertOne()-----------------------------------------------------------------------------------------
        /*const insertvar = await collection.insertOne(
            {
                _id: 8,
                firstName: 'Mokan',
                lastName: 'Raam',
                gender: 'male',
                email: 'Mokan.ram@abc.com',
                salary: 8000,
                department: { name: 'Software Analyst' }
            }
        )*/

        // insertMany-----------------------------------------------------------------------------------------
        /*const insertvarmany = await collection.insertMany(
            [
                {
                    _id: 9,
                    firstName: 'Linga',
                    lastName: 'S',
                    gender: 'male',
                    email: 'Linga@abc.com',
                    salary: 8000,
                    department: { name: 'Software Analyst' }
                },
                {
                    _id: 10,
                    firstName: 'Elangovan',
                    lastName: 'B',
                    gender: 'male',
                    email: 'Elango@abc.com',
                    salary: 7000,
                    department: { name: 'Development officer' }
                }
            ]
        )*/

        // updateOne-----------------------------------------------------------------------------------------
        /*const updatevar = await collection.updateOne(
            {_id: 9},
            {$set: {email:"lingamoorthy@abc.com"}}
        )*/

        // updateMany-----------------------------------------------------------------------------------------
        /*const updatevarmany = await collection.updateMany(
            {salary: 7000},
            {$set: {salary:7500}}
        )*/


        // insertOne()-----------------------------------------------------------------------------------------
        /*const insertvar = await collection.insertOne(
            {
                _id: 13,
                firstName: 'Mokan',
                lastName: 'Raam',
                gender: 'male',
                email: 'Mokan.ram@abc.com',
                salary: 8000,
                department: { name: 'Software Analyst' }
            }
        )*/
        
        // insertMany-----------------------------------------------------------------------------------------
        /*const insertvarmany = await collection.insertMany(
            [
                {
                    _id: 11,
                    firstName: 'Ravibala',
                    lastName: 'K',
                    gender: 'male',
                    email: 'Ravibala@abc.com',
                    salary: 4000,
                    department: { name: 'Finance' }
                },
                {
                    _id: 12,
                    firstName: 'Harikumar',
                    lastName: 'D',
                    gender: 'male',
                    email: 'Harikumar@abc.com',
                    salary: 4000,
                    department: { name: 'Finance' }
                }
            ]
        )*/

        // deleteOne
        /*const deletevar = await collection.deleteOne(
            {_id:13}
        )*/

        // deleteMany
        /*const deletevarmany = await collection.deleteMany(
            {salary:4000}
        )*/

        const cursor=collection.find({});

        await cursor.forEach(record=>{
            console.log(record)
        })

        const output = await collection.countDocuments();
        console.log("TOTAL NUMBER OF DOCUMENTS IN EMPLOYEE COLLECTION :- "+output)
        await client.close()

        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

// Call the function to connect
connectToMongoDB();
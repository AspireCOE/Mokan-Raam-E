const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/TraineeDB");

const db = mongoose.connection;

if(db){
    console.log("DB connected");
}
else{
    console.log("Connection error");
}

module.exports = {db};
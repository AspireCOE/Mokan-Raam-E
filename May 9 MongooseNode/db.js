const mongoose = require("mongoose");

async function getDatabase(){
    await mongoose.connect("mongodb://127.0.0.1:27017/DemoBB",)
    .then(() => console.log("Database Connected"))
    .catch(() => console.error("Connection error"));
}

module.exports = {
    getDatabase
}
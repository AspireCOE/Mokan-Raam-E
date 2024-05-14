const mongoose  = require("mongoose");

const Schema = mongoose.Schema;

const traineeSchema = new Schema({
    name:{
        type:String,
        lowercase:true,
        require:true
    },
    role:{
        type:String,
        lowercase:true,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    gender:{
        type:String,
        lowercase:true,
        require:true
    }
});

const traineeModel = mongoose.model("Trainee", traineeSchema);

module.exports = traineeModel;
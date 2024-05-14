const traineeModel = require("../model/schema");

const postTrainee = async(req,res) => {
    const postObject = {
        name:req.body.name,
        role:req.body.role,
        age:req.body.age,
        gender:req.body.gender
    };
    try {
        const trainee = new traineeModel(postObject);
        await trainee.save();
        res.json(trainee);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

const getTrainee = async (req, res) => {
    try {
        let name = req.params.name;
        const trainee = await traineeModel.find({});
        res.json(trainee);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

const updateTrainee = async (req, res) => {
    const id = req.params.id;
    const putObject = {
        name:req.body.name,
        role:req.body.role,
        age:req.body.age,
        gender:req.body.gender
    };
    try {
        const trainee = await traineeModel.findByIdAndUpdate(id, putObject);
        res.send(trainee);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

const deleteTrainee = async (req, res) => {
    const id = req.params.id;
    try {
        const trainee = await traineeModel.findByIdAndDelete(id);
        res.json(true);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

module.exports = {getTrainee,postTrainee,updateTrainee,deleteTrainee};
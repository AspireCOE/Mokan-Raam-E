const express = require("express");

const {getTrainee,postTrainee,updateTrainee,deleteTrainee} = require("../controller/traineeController.js");

const router = express.Router()

router.get("/",getTrainee);
router.post("/",postTrainee);
router.put("/:id", updateTrainee);
router.delete("/:id",deleteTrainee);

module.exports = router;
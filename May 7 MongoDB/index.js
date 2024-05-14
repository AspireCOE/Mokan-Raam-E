const express = require("express");
const dbo = require("./config/connect.js")
const router = require("./view/traineeRouter.js");

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json())

const port = process.env.PORT || 4500;

app.use("/trainee", router);

app.listen(port, () => {
    console.log("Server is running in port: "+port);
})
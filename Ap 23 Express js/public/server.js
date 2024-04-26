// var express = require('express'); 
// var app = express();
// var fs = require('fs'); 
// const path = require('path'); 

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.get('^/$|index(.html)?', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.get('/getUsers', function(req, res){
//     fs.readFile(__dirname + "/" + "db.json", 'utf8', function(err, data){
//         console.log(data);
//         res.end(data); 
//     });
// })

// var user = {
//     "user5": {
//         "id":5,
//         "firstname":"Liudmyla",
//         "lastname":"Nagorna",
//         "email":"mila@gmail.com"
//       },
// } 

// app.post('/addUser', function(req, res){
//     fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data){
//         data = JSON.parse(data);
//         data["user5"] = user["user5"];
//         console.log(data);
//         res.end(JSON.stringify(data));
//     });
// })
// app.get('/:id', function (req, res) {
//     fs.readFile( __dirname + "/" + "db.json", 'utf8', function (err, data) {
//        var users = JSON.parse( data );
//        var user = users["user" + req.params.id] 
//        console.log( user );
//        res.end( JSON.stringify(user));
//     });
//  })
// var server = app.listen(5000, function(){
//     var host = server.address().address
//     var port = server.address().port
//     console.log("REST API demo app listening at http://%s:%s", host, port)
// })

const express = require('express');

const axios=require('axios');
const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
app.post('/login', (req, res) => {
    const { name, age, password, phone, email } = req.body;

    if (!name || !age || !password || !phone || !email) {
        return res.status(400).send("Please provide all required fields.");
    }

    const userData={
        name,
        age,
        password,
        phone,
        email
    }
    
    axios.post("http://localhost:3000/users", userData)
        .then(response => {
            console.log("User data saved successfully:", response.data);
            res.status(200).send("User data saved successfully.");
        })
        .catch(error => {
            console.error("Error saving user data:", error);
            res.status(500).send("An error occurred while saving user data.");
        });

});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
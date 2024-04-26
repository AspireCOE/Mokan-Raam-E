const express = require('express');
const axios=require('axios');
const app = express();
const port = 5000;

// Middleware to parse JSON and URL-encoded form data
/* app.use(bodyParser.json()); */
app.use(express.urlencoded({ extended: true }));

// Serve static files (like your HTML and CSS)
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// POST route to handle form submission
app.post('/submit', (req, res) => {
    console.log('Received form submission:');
    console.log('Username:', req.body.name);
    console.log('Password:', req.body.password);
    console.log('Email:', req.body.email);
    console.log('Phone:', req.body.phone);
    // You can do further processing with the form data here
    const {name,password,email,phone}=req.body            
    const userdata={name,password,email,phone}
    
  
    res.send('Form submitted successfully!');
    axios.post("http://localhost:3000/users",userdata).then(data=>{
        alert("user data saved success");
    }).catch(err=>console.log("error saving the data"),err);
});

app.get("/getuser",(req,res)=>{

  axios.get("http://localhost:3000/users").then(dbresponse=>{
    res.json(dbresponse.data)
  }).catch(err=>{
    console.log(err)            
  })
})

app.post("/changePassword",(req,res)=>{
  const{id,password}=req.body;
  const pass={password}
  console.log(pass);
  axios.patch(`http://localhost:3000/users/${id}`,pass).then(dbresponse=>{
    res.send("password updated")
  }).catch(err=>{
    console.log(err)            
  })
})
// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
const express = require('express');
const app = express();

const path = require("path");
const cors = require('cors')
const corsOptions = require('./config/corsOptions.js')
const {logger,logEvents} = require('./middleware/logEvents.js');
const errorHandler = require('./middleware/errorHandler.js');
const PORT = process.env.PORT || 3600

app.use(logger)
// app.use(cors())

app.use(cors(corsOptions))

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/',express.static(path.join(__dirname,'./public')))
app.use('/subdir', express.static(path.join(__dirname,'./public')))

app.use('/', require('./routes/root.js'))
app.use('/subdir', require('./routes/subdir.js'))
app.use('/employees', require('./routes/api/employees'));


// const one = (req,res,next) => {
//     console.log('one');
//     next();
// }
// const two = (req,res,next) => {
//     console.log('two');
//     next();
// }
// const three = (req,res,next) => {
//     console.log('three');
//     res.send("all next completed")
// }

// app.get('/next' , [one,two,three]);

// app.get('/*',(req,res) => {
//     res.status(404).sendFile(path.join(__dirname,'views','404.html'));
// })

app.all('*', (req,res) => {
    res.status(404);
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname,'views','404.html'));
    }
    else if(req.accepts('json')){
        res.json({"error":"404 Not Found"});
    }
    else{
        res.type('txt').send("404 Not Found");
    }
})

app.use(errorHandler)
app.listen(PORT,() => console.log(`Server running on port ${PORT}`));
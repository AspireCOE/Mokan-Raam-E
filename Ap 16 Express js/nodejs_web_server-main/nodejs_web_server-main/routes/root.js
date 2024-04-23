const express = require('express')
const router = express.Router()
const path = require('path')

router.get('^/$|/index(.html)?',(req,res) => {
    res.sendFile(path.join(__dirname,'..','views','index.html'));
})

router.get('/new-page(.html)?',(req,res) => {
    res.sendFile(path.join(__dirname,'..','views','new-page.html'));
})

router.get('/old-page(.html)?',(req,res) => {
    res.redirect(301,path.join(__dirname,'..','views','new-page.html'));
})

router.get('/home(.html)?',(req,res,next) => {
    console.log("Move to next()");
    next();
},(req,res) => {
    res.send("Inside next() method");
}
)

module.exports = router
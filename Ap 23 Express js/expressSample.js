var express=require('express');

var app=express();
app.use(express.urlencoded({extended:false}));

app.get("/signin",(request,response)=>{
    
    var username=request.body['uname'];
    response.send("<h1> welcome "+username+"</h1>")

})

app.get("/payment/:option",(request,response)=>{
    var paymentOption=request.params['option'];

    if(paymentOption==='debit'){
        response.send("debit page")
    }
    else if(paymentOption==='credit'){
        response.send("credit page")
    }
    else{
        response.send("Not yet")
    }

})

app.get("/home",(request,response)=>{
    response.send("<h1>landing on home page</h1>")

})

app.listen(5000,()=>{
    console.log("express app is waiting for client connections")
})
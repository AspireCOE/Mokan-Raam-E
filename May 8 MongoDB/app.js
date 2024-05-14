const express = require("express")
const app = express();

const bodyparser = require("body-parser");
const exhbs = require("express-handlebars");
const dbo = require('./db');
const ObjectId = dbo.ObjectId;

app.use(bodyparser.urlencoded({extended:false}))
app.engine("hbs",exhbs.engine({layoutsDir:'views/',defaultLayout:"main",extname:"hbs"}));
app.set('view engine','hbs');
app.set('views','views');

app.get('/',async (req,res)=>{
    let database = await dbo.getDatabase();
    const collection = database.collection('books');
    const cursor = collection.find({});
    let books = await cursor.toArray()

    let message = "";
    let edit_id, edit_book;

    if(req.query.edit_id){
        edit_id = req.query.edit_id;
        edit_book = await collection.findOne({_id:new ObjectId(edit_id)});
    }

    if(req.query.delete_id){
        delete_id = req.query.delete_id;
        await collection.deleteOne({_id:new ObjectId(delete_id)});
        return res.redirect('/?status=3');
    }

    let num = req.query.status;
    
    switch(num){
        case '1':
            message = "Inserted Succesfully";
            break;
        case '2':
            message = "Updated Succesfully";
            break;
        case '3':
            message = "Deleted Succesfully";
            break;
        default:
            break;
    }

    res.render('main',{message,books,edit_id,edit_book});
})

app.post('/insertbook',async (req,res) => {
    let database = await dbo.getDatabase();
    const collection = database.collection('books');

    let varTitle = req.body.title;
    let varAuthor = req.body.author;

    let book = {
        title: varTitle,
        author: varAuthor 
    }

    await collection.insertOne(book);

    return res.redirect('/?status=1');
})

app.post('/updatebook/:edit_id',async (req,res) => {
    let database = await dbo.getDatabase();
    const collection = database.collection('books');

    let varTitle = req.body.title;
    let varAuthor = req.body.author;

    let book = {
        title: varTitle,
        author: varAuthor 
    }

    await collection.updateOne({_id:new ObjectId(req.params.edit_id)},{$set: book});

    return res.redirect('/?status=2');
})


app.listen(8000, () => {
    console.log("Listening to port 8000");
})
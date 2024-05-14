const express = require("express")
const app = express();

const bodyparser = require("body-parser");
const exhbs = require("express-handlebars");
const dbo = require('./db');

dbo.getDatabase();

const bookModel = require("./models/bookModel");



app.use(bodyparser.urlencoded({extended:false}))
app.engine("hbs",exhbs.engine(
    {
        layoutsDir:'views/',
        defaultLayout:"main",
        extname:"hbs",
        runtimeOptions:{
            allowProtoPropertiesByDefault:true,
            allowProtoMethodsByDefault:true
        }
    }
));
app.set('view engine','hbs');
app.set('views','views');

app.get('/',async (req,res)=>{

    let books = await bookModel.find({});

    let message = "";
    let edit_id, edit_book;

    if(req.query.edit_id){
        edit_id = req.query.edit_id;
        edit_book = await bookModel.findOne({_id:edit_id});
    }

    if(req.query.delete_id){
        delete_id = req.query.delete_id;
        await bookModel.deleteOne({_id:delete_id});
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

    let varTitle = req.body.title;
    let varAuthor = req.body.author;

    const book = new bookModel({
        title: varTitle,
        author: varAuthor 
    })

    book.save();

    return res.redirect('/?status=1');
})

app.post('/updatebook/:edit_id',async (req,res) => {

    let varTitle = req.body.title;
    let varAuthor = req.body.author;

    let book = {
        title: varTitle,
        author: varAuthor 
    }

    await bookModel.findOneAndUpdate({_id:req.params.edit_id},{$set: book});

    return res.redirect('/?status=2');
})


app.listen(8000, () => {
    console.log("Listening to port 8000");
})
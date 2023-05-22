const express = require('express');
const mongoose= require('mongoose')
const Data = require('./schema')
const app = express();

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://yashd:iitianyash@nodeexpressproject.qp0arwg.mongodb.net/login_form?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("connected to database...")
})
.catch((error)=>{
    console.log("error occurred...")
})

app.get('/',(req,res)=>{
    res.sendFile('./index.html',{root:'public'})
})

app.get('/home',(req,res)=>{
    res.send("Congratulations you are finally redirected to home page after logging in...")
})


app.post('/',(req,res)=>{
    console.log("yes")
    console.log(req.body)
    const newuser  = new Data(req.body);
    newuser.save();
    res.redirect('/home');

})


app.listen(100,()=>{
    console.log("listening on 100 ...")
})
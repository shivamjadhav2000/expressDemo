const express =require('express')
const app=express()
app.set('view engine','ejs')
app.get('/',function(req,res){
res.render('home',{user:"imtyaz"})
})
app.get('/post',(req,res)=>{
res.end("this is post page")
})
app.get('/tweets',(req,res)=>{
    res.end("this is post tweets")
    })

app.listen(5000)
const express =require('express')
const app=express()
app.use(express.json())

const posts=require("./routes/post")
app.use('/posts',posts)

app.listen(5000,()=>{
    console.log("server started!.")
})




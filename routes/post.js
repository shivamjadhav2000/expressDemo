const express=require("express")
router=express.Router()

let postdb=[{name:"shivam",msg:"my first post !!"},{name:"anirudh",msg:"i am cool!"}]

router.get('/mypost/:name',(req,res)=>{
    username=req.params.name
    let mypost={}
    postdb.forEach((i)=>{
        if(username===i.name){
          mypost=i
         }
    })
    res.json(mypost)
})
router.get('/',(req,res)=>{
    res.send(postdb)
})
module.exports=router


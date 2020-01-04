const express=require('express')
const router=express.Router()
router.get('/',function(req,res){
    if(req.session.userid)
    res.send(JSON.stringify(req.session.username))
    else
    res.send("session not exists")
})
module.exports=router
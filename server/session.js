const express=require('express')
const router=express.Router()
router.get('/',function(req,res){
if(req.session.mail){
    
    res.send(JSON.stringify(req.session.username))}
    else
    res.send(JSON.stringify("session not exists"))
})
module.exports=router
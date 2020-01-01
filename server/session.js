const express=require('express')
const router=express.Router()
router.get('/',function(req,res){
    if(req.session.userid)
    res.send(true)
    else
    res.send(false)
})
module.exports=router
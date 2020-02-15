const express=require('express')
const session=require('express-session')
const router=express.Router()
router.get('/',function(req,res){
    if(req.session.mail){
        res.send(true)
    }
    else
    res.send(false)
})
module.exports=router
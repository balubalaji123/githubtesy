const express=require('express')
const session=require('express-session')

const router=express.Router()
router.get('/',function(req,res){
    console.log("entered")
    req.session.destroy(err=>{
        if(err)
        {
            console.log("erro")
            res.send(JSON.stringify("error"))

        }
        else{
        res.clearCookie('sid')
        res.send(JSON.stringify("logout sucess"))
       
    }})
})
module.exports=router
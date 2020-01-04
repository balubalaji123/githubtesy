const express=require('express')
const router=express.Router()
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var dbo=''
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
   dbo = db.db("mydb");
});
router.post('/',function(req,res){

     console.log("days"+JSON.stringify(req.body.days));
    tutorname=req.body.name
    tutorsubject=req.body.subject
    tutortime=req.body.time
    tutorcoursetype=req.body.coursetype 
    tutorfee=req.body.fee 
    tutordescription=req.body.description 
    tutorwatsuplink=req.body.watsuplink
    tutorday=req.body.day
    tutormail=req.body.mail
    console.log('node'+req.body.coursetype)
myobj={tutorname:tutorname,tutorsubject:tutorsubject,tutortime:tutortime,
        tutorcoursetype:tutorcoursetype,tutorfee:tutorfee,tutordescription:tutordescription,
        tutorwatsuplink:tutorwatsuplink,tutorday:tutorday,tutorparticipitation:true,tutormail:tutormail}

        dbo.collection("tutors").insertOne(myobj, function(err, res) {
        
        })
res.send(true)








})
module.exports=router
const express=require('express')
const router=express.Router()
var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";
var dbo=''
// check for existing data
var checkuser
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
   dbo = db.db("mydb");
});
router.get('/',function(req,res){
  usermail=req.session.mail
  c={tutormail:usermail}
  console.log(JSON.stringify(c))
    dbo.collection("tutors").find(c,{tutorsubject:1,tutortime:1,selecteddays:1},{$exists:true}).toArray(function(err, result) {
        if (err) throw err;
        checkuser=result
       
        res.send(JSON.stringify(checkuser))
      });
})
// learner name in dashboarddefines the tutor anme of particular class
router.get('/learnt',function(req,res){
  usermail=req.session.mail
  c={learnermail:usermail}
  console.log(JSON.stringify(c))

    dbo.collection("learnt").find(c,{learnername:1,leanersubject:1,learnertime:1,time:1,date:1,like:1,tutormail:1},{$exists:true}).toArray(function(err, result) {
        if (err) throw err;
        checkuser=result
        res.send(JSON.stringify(checkuser))
      });
})
router.get('/profileurl',function(req,res){
  usermail=req.session.mail
  c={usermail:usermail}
  console.log("c"+JSON.stringify(req.session))
    dbo.collection("customers").find(c,{$exists:true}).toArray(function(err, result) {
        if (err) throw err;
        checkuser=result
        console.log(result)
        res.send(JSON.stringify(checkuser))
      });
  
})
module.exports=router
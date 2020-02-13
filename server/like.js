const express=require('express')
var MongoClient = require('mongodb').MongoClient;
const router=express.Router()
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
      if (err) throw err;
       dbo = db.db("mydb");
    });
    var likess
router.post('/',function(req,res){
    var myquery={tutormail:req.body.tutormail,learnermail:req.session.mail,leanersubject:req.body.leanersubject,time:req.body.time}
    dbo.collection("learnt").find(myquery,{$exists:true}).toArray(function(err, result) {
      if (err) throw err;
      checkuser=result
      if(result.length){
    var newvalues = { $set: {like:true} };
      dbo.collection("learnt").updateOne(myquery, newvalues, function(err, res) {
            if (err) throw err;
            console.log("res")
          });
      var tutorquery={tutormail:req.body.tutormail,tutorname:req.body.learnername,tutorsubject:req.body.leanersubject,}
      dbo.collection("continousteacher").find(tutorquery,{likes:1}).toArray(function(err,result){
        if(err)
        console.log(err)
       else if(result.length){
        likess=result[0].likes
        // for increase likes in tutors account
        likess=likess+1;
    var newtutorvalues = { $set: {likes:likess} };
    dbo.collection("continousteacher").updateOne(tutorquery, newtutorvalues, function(err, res) {
        if (err) throw err;
        // console.log(res)
      });}
    
    })}
    })
    res.send(JSON.stringify("like page"))
})
router.post('/delete',function(req,res){
  checkuser=[]
    tutorsubject=req.body.tutorsubject
    tutorsubsubject=req.body.tutorsubsubject
    cousetype=req.body.coursetype
    usermail=req.session.usermail
    var query={tutormail:req.session.mail,tutorsubject:tutorsubject,tutorcoursetype:cousetype,tutorsubsubject:tutorsubsubject}  
    dbo.collection("continousteacher").deleteOne(query, function(err, obj) {
      if (err) throw err;
      usermail=req.session.usermail
      c={tutormail:usermail}
        dbo.collection("continousteacher").find(c,{$exists:true}).toArray(function(err, result) {
            if (err) throw err;
            checkuser=result
           console.log("check"+result)
            res.send(JSON.stringify(checkuser))
          });
    });
})
module.exports=router

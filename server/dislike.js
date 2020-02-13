const express=require('express')
var MongoClient = require('mongodb').MongoClient;
const router=express.Router()
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
      if (err) throw err;
       dbo = db.db("mydb");
    });
    router.post('/',function(req,res){
        var myquery={tutormail:req.body.tutormail,learnermail:req.session.mail,leanersubject:req.body.leanersubject,time:req.body.time}
        var newvalues = { $set: {like:false} };
          dbo.collection("learnt").updateOne(myquery, newvalues, function(err, res) {
                if (err) throw err;
                console.log("res from dislike")
              });
          var tutorquery={tutormail:req.body.tutormail,tutorname:req.body.learnername,tutorsubject:req.body.leanersubject}
          dbo.collection("continousteacher").find(tutorquery,{likes:1}).toArray(function(err,result){
            if(err)
            console.log(err)
            else if(result.length){
            likess=result[0].likes
            // for increase likes in tutors account
            likess=likess-1;
        var newtutorvalues = { $set: {likes:likess} };
        dbo.collection("continousteacher").updateOne(tutorquery, newtutorvalues, function(err, res) {
            if (err) throw err;
            // console.log(res)
          });}

        })
        res.send(JSON.stringify("dislike page"))
    })
    module.exports=router
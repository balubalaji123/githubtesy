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
    console.log("from like"+JSON.stringify(req.body))
    var myquery={tutormail:req.body.tutormail,learnermail:req.body.learnermail,leanersubject:req.body.leanersubject}
   
    var newvalues = { $set: {like:true} };
      dbo.collection("learnt").updateOne(myquery, newvalues, function(err, res) {
            if (err) throw err;
            console.log("res")
          });
      var tutorquery={tutormail:req.body.tutormail,tutorname:req.body.learnername,tutorsubject:req.body.leanersubject}
      dbo.collection("tutors").find(tutorquery,{likes:1}).toArray(function(err,result){
        if(err)
        console.log(err)
        else
        likess=result[0].likes
        // for increase likes in tutors account
        likess=likess+1;
    var newtutorvalues = { $set: {likes:likess} };
    dbo.collection("tutors").updateOne(tutorquery, newtutorvalues, function(err, res) {
        if (err) throw err;
        // console.log(res)
      });
    })
    


    res.send(JSON.stringify("like page"))
})
router.post('/delete',function(req,res){
  console.log(JSON.stringify(req.body))
  res.send()
})
module.exports=router
//   var myquery = { address: "Valley 345" };
//   var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
//   dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
//     if (err) throw err;
//     console.log("1 document updated");
//     db.close();
//   });

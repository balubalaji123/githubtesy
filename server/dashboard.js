const express=require('express')
const router=express.Router()
var MongoClient = require('mongodb').MongoClient;
var dateTime = require('node-datetime');

var url = "mongodb://localhost:27017/";
var dbo=''
// check for existing data
var checkuser
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
   dbo = db.db("mydb");
});
time=new Date()
var date=time.getDate();
var month=time.getMonth()+1;
var year=time.getFullYear()
var dt = dateTime.create();
var formatted = dt.format('Y-m-d H:M:S');
todaydate=year+'-'+month+'-'+date
router.get('/',function(req,res){
  checkuser=[]
  usermail=req.session.mail
  c={tutormail:usermail}
  // we will dispaly only permenant tutors
  console.log(JSON.stringify(c))
    dbo.collection("continousteacher").find(c,{tutorsubject:1,tutortime:1,selecteddays:1},{$exists:true}).toArray(function(err, result) {
        if (err) throw err;
        if(result.length)
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
router.get('/fastfilling',function(req,res){
  c={tutorlocation:req.session.location,maxstudents: { $gt: 0 },tutordate:{ $gt:new Date(todaydate)  }}

  dbo.collection('onceteacher').find(c).sort({"maxstudents":-1}).limit(10).toArray(function(err,result){
   if(err)throw err
   if(result.length){
   console.log("result")
    res.send(JSON.stringify(result))}
  })
})
router.get('/mostliked',function(req,res){
  dbo.collection('continousteacher').find({tutorlocation:req.session.location}).sort({"likes":-1}).limit(10).toArray(function(err,result){
    if(err) throw err
    res.send(JSON.stringify(result))
  })
})
router.get('/once',function(req,res){
  var g={tutormail:req.session.mail}
  dbo.collection('onceteacher').find(g,{$exists:true}).toArray(function(err,resp){
    if(err) throw err
    res.send(JSON.stringify(resp))
  })
})
router.get('/multiple',function(req,res){
  var h={tutormail:req.session.mail}
  dbo.collection('continousteacher').find(h,{$exists:true}).toArray(function(err,resp){
    if(err) throw err
    res.send(JSON.stringify(resp))
  })
})


module.exports=router
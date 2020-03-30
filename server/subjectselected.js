const express=require('express')
var nodemailer = require('nodemailer');
var MongoClient = require('mongodb').MongoClient;
var dateTime = require('node-datetime');
var url = "mongodb://localhost:27017/";
var dbo=''
MongoClient.connect(process.env.MONGODB_URI || url, function(err, db) {
  if (err) throw err;
   dbo = db.db("mydb");
});
const router=express.Router()
router.post('/',function(req,res){
// check for already registered
if(req.body.selecteddays.length){
var checking={tutorimage:req.body.tutorimage,learnermail:req.session.mail,tutormail:req.body.tutormail,
leanersubject:req.body.subject,leanersubsubject:req.body.subsubject,selecteddays:req.body.selecteddays,
tutororgdate:req.body.tutordate}}
else{
  var checking={tutorimage:req.body.tutorimage,learnermail:req.session.mail,tutormail:req.body.tutormail,
    leanersubject:req.body.subject,leanersubsubject:req.body.subsubject,selecteddays:"",
    tutororgdate:req.body.tutordate}
}
dbo.collection('learnt').find(checking,{$exists:true}).toArray(function(err,result1){
  if(err) throw err

  else if(result1.length){
    res.send(JSON.stringify("already registered"))
  }
  else{
// if not registered
if(req.body.selecteddays.length){
  // multiple days course
  learnermail=req.session.mail
  tutormail=req.body.tutormail
// these indicates the details of the tutor which student is selected
  learnername=req.body.name
  leanersubject=req.body.subject
learnertime=req.body.time
var q={tutorimage:req.body.tutorimage,learnername:learnername,learnermail:learnermail,leanersubject:leanersubject,leanersubsubject:req.body.subsubject,
tutordate:new Date(req.body.tutordate),tutororgdate:req.body.tutordate,like:false,tutormail:tutormail,
time:req.body.classtime,selecteddays:req.body.selecteddays}
dbo.collection("learnt").insertOne(q, function(err, res) { 
})
// for email of multiple days selection
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'wolvesofthevalleysspardha@gmail.com',
    pass: 'fmt@12345'
  }
});
var mailOptions = {
  from: 'find my tutor',
  to: req.session.mail,
  subject: 'Regisered course details',
  html:'u registerd for course   '+req.body.subject+' on the day '+req.body.selecteddays+'and tutor is   '+req.body.name+'  to join group   <a href='+req.body.watsuplink+'> click</a>'
};
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent for course selected' + info.response);
  }
});
}
// for single time courses
else{
  learnermail=req.session.mail
    tutormail=req.body.tutormail
// these indicates the details of the tutor which student is selected
    learnername=req.body.name
leanersubject=req.body.subject
learnertime=req.body.time
  var q={tutorimage:req.body.tutorimage,learnername:learnername,learnermail:learnermail,leanersubject:leanersubject,leanersubsubject:req.body.subsubject,
    tutordate:new Date(req.body.tutordate),tutororgdate:req.body.tutordate,like:false,tutormail:tutormail,
  time:req.body.classtime,selecteddays:""}
  dbo.collection("learnt").insertOne(q, function(err, res) { 
  })
  // for mail of once course
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'wolvesofthevalleysspardha@gmail.com',
      pass: 'fmt@12345'
    }
  });
  var mailOptions = {
    from: 'find my tutor',
    to: req.session.mail,
    subject: 'Regisered course details',
    html:'u registerd for course   '+req.body.subject+'and tutor is   '+req.body.name+' on '+ req.body.tutordate+'to join group   <a href='+req.body.watsuplink+'> click</a>'
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent for once selected' + info.response);
    }
  });
// to reduce seats
var c={tutorsubject:leanersubject,tutorsubsubject:req.body.subsubject,tutormail:tutormail}

dbo.collection('onceteacher').find(c,{$exists:true}).toArray(function(req,result){
if(result.length){
var check=result[0].maxstudents
check=check-1
var newtutorvalues = { $set: {maxstudents:check} };
dbo.collection('onceteacher').updateOne(c,newtutorvalues,function(err,resu){
  if(err)throw err
})}
})
}
res.send(true)
  }
})
})
module.exports=router

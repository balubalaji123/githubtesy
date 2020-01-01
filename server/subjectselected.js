const express=require('express')
var nodemailer = require('nodemailer');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var dbo=''
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
   dbo = db.db("mydb");
});

const router=express.Router()
router.post('/',function(req,res){
  console.log("session"+req.session.mail)
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
        html:'u registerd for course   '+req.body.subject+'and tutor is   '+req.body.name+'  to join group   <a href='+req.body.watsuplink+'> click</a>'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      // to store student registered course and to identify with particular student mailid
learnername=req.body.name
learnermail=req.session.mail
leanersubject=req.body.subject
learnertime=req.body.time
var q={learnername:learnername,learnermail:learnermail,leanersubject:leanersubject,learnertime:learnertime,
    studentparticipitation:true}
    console.log("subjectselected"+JSON.stringify(q))
dbo.collection("learnt").insertOne(q, function(err, res) { 
})
})
module.exports=router
const express=require('express')
var nodemailer = require('nodemailer');
var MongoClient = require('mongodb').MongoClient;
var dateTime = require('node-datetime');
var formatted
var url = "mongodb://localhost:27017/";
var dbo=''
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
   dbo = db.db("mydb");
});
const router=express.Router()
router.post('/',function(req,res){
  console.log("subject selected"+JSON.stringify(req.body))
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
      learnermail=req.session.mail
      tutormail=req.body.tutormail
// these indicates the details of the tutor which student is selected
      learnername=req.body.name
leanersubject=req.body.subject
learnertime=req.body.time
time=new Date()
var date=time.getDate();
var month=time.getMonth()+1;
var year=time.getFullYear()
var dt = dateTime.create();
var formatted = dt.format('Y-m-d H:M:S');
todaydate=date+'/'+month+'/'+year
var q={learnername:learnername,learnermail:learnermail,leanersubject:leanersubject,leanersubsubject:req.body.subsubject,learnertime:learnertime,
    date:formatted,like:false,tutormail:tutormail}
    console.log("subjectselected"+JSON.stringify(q))
dbo.collection("learnt").insertOne(q, function(err, res) { 
})
var c={tutorsubject:leanersubject,tutorsubsubject:req.body.subsubject,tutormail:tutormail}
dbo.collection('tutors').find(c,{$exists:true}).toArray(function(req,result){
  if(result.length){
  var check=result[0].maxstudents
  check=check-1
  var newtutorvalues = { $set: {maxstudents:check} };
  dbo.collection('tutors').updateOne(c,newtutorvalues,function(err,resu){
    if(err)throw err
  })}
})
})
module.exports=router
const express=require('express')
const router=express.Router()
const nodemailer=require('nodemailer')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var dbo=''
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
   dbo = db.db("mydb");
});
var random=[]
router.post('/',function(req,res){
    var c=Math.floor(100000+ Math.random() * 900000);
console.log("c",c)
    random.push(c)
    var query={usermail:req.body.mail1}
    dbo.collection('customers').find(query).toArray(function(err,result){
        if(err)throw err
        if(result.length){
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'wolvesofthevalleysspardha@gmail.com',
                  pass: 'fmt@12345'
                }
              });
              var mailOptions = {
                from: 'find my tutor',
                to: req.body.mail1,
                subject: 'change password',
                html:'welcome to find mytutor   to change yourpassword enter these otp   '+c
              };  
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent for forgot password');
                }
              });
            res.send(JSON.stringify("user exists"))
        }
        else
        res.send(JSON.stringify("user not exists"))
    })

})
router.post('/otp',function(req,res){
    c=req.body.otp1
    check=0
    for(var i=0;i<random.length;i++){
        if(random[i]==c)
        check=1
    }
    if(check==1)
    res.send(JSON.stringify("ok"))
    else
    res.send(JSON.stringify("not ok"))
})
router.post('/update',function(req,res){
    var c={usermail:req.body.mail1}
    var passquery={ $set: {userpassword:req.body.password}}
    dbo.collection('customers').updateOne(c,passquery,function(err,resu){
        if(err)throw err
        res.send(JSON.stringify("updated"))
      })

})
module.exports=router
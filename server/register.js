const express=require('express')
const router=express.Router()
const session=require('express-session')
// const session=require('express-session')
var nodemailer = require('nodemailer');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var dbo=''
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
   dbo = db.db("mydb");
  //Create a collection name "customers":
  
});
var check=Math.random()
var usermail
var username

router.post('/',function(req,res){
    username=req.body.name
    usermail=req.body.mail
    userpassword=req.body.password
    console.log("enter")
    myobj={usermail:usermail}
    dbo.collection("customers").find(myobj,{$exists:true}).toArray(function(err, result) {
     console.log(result)
      if (err) throw err;
      // checkuser=result
      if(result.length){
        // req.session.userid=result[0]._id;
        // req.session.mail=usermail
        // console.log("user exists")
      res.send(JSON.stringify("useralreadyexists"))
    }
      else{
  console.log("ene")
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'wolvesofthevalleysspardha@gmail.com',
          pass: 'fmt@12345'
        }
      });
      var mailOptions = {
        from: 'find my tutor',
        to: usermail,
        subject: 'account conformation',
        html:'welcome Mr.'+username+'   to find mytutor   to confirm your mail <a href="http://localhost:3000/register?id='+check+'">click</a>'
      };  
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent for general login');
        }
      });
      res.send(JSON.stringify("mailsent"))
    }});
    
    
})
router.get('/',function(req,res){
  
   if(check==req.query['id']){
   myobj={username:username,usermail:usermail,userpassword:userpassword}
    dbo.collection("customers").insertOne(myobj, function(err, res) {
        req.session.userid=res.ops[0]._id
      })
      res.sendFile(__dirname+'/confirmmail.html')
      ;}
      else{
      res.send('enter a valid email address')
      }
})
// for gmail login
router.post('/google',function(req,res){
  console.log(JSON.stringify(req.body))
  username=req.body.googlename
  usermail=req.body.googleemail
  userpassword=req.body.password2
  myobj={usermail:usermail}
  dbo.collection("customers").find(myobj,{$exists:true}).toArray(function(err, result) {
    if (err) throw err;
    // checkuser=result
    if(result.length){
      // req.session.userid=result[0]._id;
      // req.session.mail=usermail
      // console.log("user exists")
    res.send(JSON.stringify("useralreadyexists"))
  }
    else{
      myobj={username:username,usermail:usermail,userpassword:userpassword}
      dbo.collection("customers").insertOne(myobj, function(err, res) {
          req.session.userid=res.ops[0]._id
        })
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'wolvesofthevalleysspardha@gmail.com',
        pass: 'fmt@12345'
      }
    });
    var mailOptions = {
      from: 'find my tutor',
      to: usermail,
      subject: 'account conformation',
      html:'welcome Mr.'+username+'   to find my tutor you have created succesfully an account'
    };  
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent:');
      }
    });
    res.send(JSON.stringify("account created"))
  }});
  
  
})







module.exports=router
const express=require('express')
const router=express.Router()
const multer=require('multer')
const session=require('express-session')
// const session=require('express-session')
var nodemailer = require('nodemailer');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var dbo=''
var d=null
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
   dbo = db.db("mydb");
  //Create a collection name "customers":
});
var check=Math.random()
var usermail
var username
var store=multer.diskStorage({
  destination:function(req,file,cb){
          cb(null,'./server/uploads1')
      },
      filename:function(req,file,cb){
          function makeString() {
              let outString = '';
              let inOptions= 'abcdefghijklmnopqrstuvwxyz';
            
              for (let i = 0; i < 26; i++) {
            
                outString += inOptions.charAt(Math.floor(Math.random() * inOptions.length));
            
              }
            
              return outString;
            }
            const rand=()=>{
              d=makeString()+".jpg"
            }
          rand()
          cb(null,d)
      }
  });
  var upload=multer({storage:store})
  router.post('/upload',upload.single('file'),function(req,res){
      d=req.file.filename
      res.send(JSON.stringify("sucess"))
  })
router.post('/',function(req,res){
    username=req.body.name
    usermail=req.body.mail.toLowerCase()
    userpassword=req.body.password
    userlocation=req.body.location
    userlocation=userlocation.toLowerCase()
    userimage=d
    myobj={usermail:usermail}
    dbo.collection("customers").find(myobj,{$exists:true}).toArray(function(err, result) {
      if (err) throw err;
      if(result.length){
      res.send(JSON.stringify("useralreadyexists"))
    }
      else{
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
      
      html:'welcome Mr.'+username+'   to find mytutor   to confirm your mail <a href="http://192.168.100.8:3000/register?id='+check+'">click</a><br>'


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
   myobj={userimage:d,username:username,usermail:usermail,userpassword:userpassword,userlocation:userlocation}
    dbo.collection("customers").insertOne(myobj, function(err, res) {
      
      })
      res.sendFile(__dirname+'/confirmmail.html')
      ;}
      else{
      res.send('enter a valid email address')
      }
})
// for gmail login
router.post('/google',function(req,res){
  // console.log(JSON.stringify(req.body))
  d=null
  username=req.body.googlename
  usermail=req.body.googleemail
  userpassword=req.body.password2
  userlocation=req.body.location.toLowerCase()
  myobj={usermail:usermail}
  dbo.collection("customers").find(myobj,{$exists:true}).toArray(function(err, result) {
    if (err) throw err;
    // checkuser=result
    if(result.length){
      // req.session.userid=result[0]._id;
      // req.session.mail=usermail
      // console.log("user exists"+JSON.stringify(req.session))
    res.send(JSON.stringify("useralreadyexists"))
  }
    else{
       req.session.username=username
          req.session.mail=usermail
          req.session.userimage=d
        req.session.location=userlocation
      myobj={userimage:d,username:username,usermail:usermail,userpassword:userpassword,userlocation:userlocation}
      dbo.collection("customers").insertOne(myobj, function(err, res) {
          // req.session.userid=res.ops[0]._id
          // tried to creat session whe registered but failed
          dbo.collection("customers").find(myobj,{$exists:true}).toArray(function(err, result) {
            if (err) throw err;
            // checkuser=result
            if(result.length){
              req.session.userid=result[0]._id;
              req.session.mail=usermail
            // res.send(JSON.stringify("useralreadyexists"))
          }
          })
        
      
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
  // email sent
      }
    });
    
    res.send(JSON.stringify("account created"))
  }
  

});
  
  
})

module.exports=router
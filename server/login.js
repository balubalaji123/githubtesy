const express=require('express')
const router=express.Router()
const session=require('express-session')
var MongoClient = require('mongodb').MongoClient;
var usermail
var userpassword
var url = "mongodb://localhost:27017/";
var dbo=''
// check for existing data
var checkuser
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
   dbo = db.db("mydb");
});
router.post('/',function(req,res){
    // checkuser=[]
usermail=req.body.mail
userpassword=req.body.password
c={usermail:usermail}
dbo.collection("customers").find(c,{username:1,userpassword:1},{$exists:true}).toArray(function(err, result) {
    if (err) throw err;
    checkuser=result
    if(result.length){
      if(result[0].userpassword!=userpassword){
          res.send(JSON.stringify("passwordwrong")) //password doesn't match
          }
         else{
      req.session.userid=result[0]._id;
      req.session.username=result[0].username
      req.session.userimage=result[0].userimage
      req.session.mail=usermail
      req.session.location=result[0].userlocation
    res.send(JSON.stringify("account exists"))
  }}
    else{
    res.send(JSON.stringify("not exists"))
  }});
// var query={usermail:usermail};
// dbo.collection("customers").findOne(query,function(err,result){                               //findquery
// if (err) throw err;                                                                     //findOne({}, function(err, result)
// if(result!=null)
// {
 
//   if(result.userpassword!=userpassword){
//   res.send(JSON.stringify("passwordwrong")) //password doesn't match
//   }
  
//   else{
//     res.send(JSON.stringify("exists")) //both are wrong
//   }
// }
// else{
//   res.send(JSON.stringify("notexists")) //doesn't exists
// }
// })
});
module.exports=router
const express=require('express')
const router=express.Router()
var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";
var dbo=''
// check for existing data
var checkuser
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
   dbo = db.db("mydb");
});
router.get('/',function(req,res){
    dbo.collection("tutors").find({},{$exists:true}).toArray(function(err, result) {
        if (err) throw err;
        checkuser=result
       
        res.send(JSON.stringify(checkuser))
      });
})
router.get('/learnt',function(req,res){
  usermail=req.session.usermail
  c={usermail:usermail}
    dbo.collection("learnt").find(c,{$exists:true}).toArray(function(err, result) {
        if (err) throw err;
        checkuser=result
        res.send(JSON.stringify(checkuser))
      });
})

module.exports=router
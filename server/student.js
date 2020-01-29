const express=require('express')
const router=express.Router()
var MongoClient = require('mongodb').MongoClient;
var dbo=''
var checkuser
var temp
var url = "mongodb://localhost:27017/";


MongoClient.connect(url, function(err, db) {
      if (err) throw err;
       dbo = db.db("mydb");
    });
router.get('/', function(req,res){
    c={tutorlocation:req.session.location}
    dbo.collection("tutors").find(c).sort({"likes":-1}).toArray(function(err, result) {
        if (err) throw err;
        checkuser=result
        res.send(JSON.stringify(checkuser))
      });
      
})
router.get('/sujects',function(req,res){
    dbo.collection("subjects").find({ },{subjects:1}).toArray(function(err,res1){
        if(err) throw err;
        temp=res1[0].subjects
        orgsub=temp.slice(1,temp.length)
console.log(orgsub)
        res.send(JSON.stringify(orgsub))
    });
})
module.exports=router
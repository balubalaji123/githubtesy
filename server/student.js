const express=require('express')
const router=express.Router()
var MongoClient = require('mongodb').MongoClient;
var dbo=''
var checkuser
var url = "mongodb://localhost:27017/";


MongoClient.connect(url, function(err, db) {
      if (err) throw err;
       dbo = db.db("mydb");
    });
router.get('/', function(req,res){
    c={tutorlocation:req.session.location}
    dbo.collection("tutors").find(c).toArray(function(err, result) {
        if (err) throw err;
        checkuser=result
        res.send(JSON.stringify(checkuser))
      });
      
})
module.exports=router
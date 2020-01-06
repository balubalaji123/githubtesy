const express=require('express')
const router=express.Router()
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var dbo=''
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
   dbo = db.db("mydb");
});
var days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
var selecteddays=[]
router.post('/',function(req,res){
    selecteddays=[]
    tutordays=req.body.days
    if(tutordays["EveryDay"]!=true){
    for(i=0;i<7;i++){
        if(tutordays[days[i]]==true)
        selecteddays.push(days[i]);
    }}
    else{
        selecteddays=days
    }
    console.log(selecteddays)
    tutorname=req.body.name
    tutorsubject=req.body.subject
    tutortime=req.body.time
    tutorcoursetype=req.body.coursetype 
    tutorfee=req.body.fee 
    tutordescription=req.body.description 
    tutorwatsuplink=req.body.watsuplink
    tutorday=req.body.day
    tutormail=req.session.mail
myobj={tutorname:tutorname,tutorsubject:tutorsubject,tutortime:tutortime,
        tutorcoursetype:tutorcoursetype,tutorfee:tutorfee,tutordescription:tutordescription,
        tutorwatsuplink:tutorwatsuplink,tutorday:tutorday,tutorparticipitation:true,selecteddays:selecteddays
    ,likes:0,tutormail:tutormail}
        dbo.collection("tutors").insertOne(myobj, function(err, res) {
        
        })
res.send(true)








})
module.exports=router
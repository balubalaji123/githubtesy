const express=require('express')
const multer=require('multer')
var ObjectId = require('mongodb').ObjectID;

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
    console.log("tutor"+JSON.stringify(req.body))
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
    // console.log(selecteddays)
    tutorsubject=req.body.subject
    // for storing subjects in db
    // try to avoid to palce empty space
    check=0
    subjectfind={_id:ObjectId("5e3054196d1028ae1b2514f6")}
    subjectarray=[]
    copy=[]
    dbo.collection("subjects").find(subjectfind,{subjects:1}).toArray(function(err,res){
        subjectarray=res[0].subjects
        console.log("res"+res)
        console.log(subjectarray);
    subobj={$set:{subjects:subjectarray}}
        console.log("sub"+subjectarray)
        for(i=0;i<subjectarray.length;i++){
            if(tutorsubject==subjectarray[i]){
            check=1;
        console.log("enered");
        }
        }
        if(check==0){
            subjectarray.push(tutorsubject)
            dbo.collection("subjects").updateOne(subjectfind,subobj, function(err, res) {
                console.log("inserted")  
              })
        }
    })
    
    tutortime=req.body.time
    tutorcoursetype=req.body.coursetype 
    tutorfee=req.body.fee 
    tutordescription=req.body.description 
    tutorwatsuplink=req.body.watsuplink
    tutorday=req.body.day
    tutormail=req.session.mail
    tutorsubsubject=req.body.subsubject
    console.log("subsubject  "+tutorsubsubject)
    var c=new Object()
//     a="b"
// c[a]="c"
// console.log("c="+JSON.stringify(c))
// var qur={e:c}
// dbo.collection("maths").insertOne(qur,function(req,res){
//     console.log("inserted")
// })
c[tutorsubject]=[tutorsubsubject]
    var query={tutorsubsubject:c}
    console.log("query"+JSON.stringify(query))
    // for subsubjects
    // var subsubjectquery={_id : ObjectId("5e310d835e094f5728edd164")}
    
    check1=0
dbo.collection(tutorsubject).find(query).toArray(function(err,response2){
    if(err)throw err
    // console.log("respose2"+response2[0].tutorsubsubject)
    if(!response2.length){
        copy=response2[0].tutorsubsubject
    delete copy[0]
    delete copy[1]
    console.log("copy   "+typeof(copy))
    for(i=0;i<copy.length;i++){
if(copy[i]==tutorsubsubject)
{
    check1=1;
}
    }
    if(check1==0){
        console.log("in   ")
        copy.push(tutorsubsubject)
        subobj1={$set:{tutorsubsubject:copy}}

        dbo.collection(tutorsubject).updateOne(subsubjectquery,subobj1, function(err, res) {
            console.log("inserted")  
          })

    }}
   
})







myobj={tutorname:req.session.username,tutorsubject:tutorsubject,tutortime:tutortime,
        tutorcoursetype:tutorcoursetype,tutorfee:tutorfee,tutordescription:tutordescription,
        tutorwatsuplink:tutorwatsuplink,tutorday:tutorday,tutorparticipitation:true,selecteddays:selecteddays
    ,likes:0,tutormail:tutormail,tutorlocation:req.session.location}
        dbo.collection("tutors").insertOne(myobj, function(err, res) {
        })
res.send(true)
})
var store=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads')
    },
    filename:function(req,file,cb){
        cb(null,"filename")
    }
});
var upload=multer({storage:store}).single('file');

router.post('/image',function(req,res){
    upload(req,res,function(err){
        if(err){
            res.send(JSON.stringify("error"))
        }
        else
        res.send(JSON.stringify("sucess"))
    })
res.send(JSON.stringify("after"))
})





module.exports=router 
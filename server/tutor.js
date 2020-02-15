const express=require('express')
const multer=require('multer')
const path=require('path')
var ObjectId = require('mongodb').ObjectID;
const router=express.Router()
var dateTime = require('node-datetime');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var dbo=''
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
   dbo = db.db("mydb");
});
var days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
var selecteddays=[]
var subjectsarr=[]
var subsubjectarr=[]
var d

// // var store=multer.diskStorage({
// // destination:function(req,file,cb){
// //         cb(null,'./server/uploads1')
// //     },
// //     filename:function(req,file,cb){
// //         // console.log("c"+JSON.stringify(file))
// //         function makeString() {
// //             let outString = '';
// //             let inOptions= 'abcdefghijklmnopqrstuvwxyz';
          
// //             for (let i = 0; i < 26; i++) {
          
// //               outString += inOptions.charAt(Math.floor(Math.random() * inOptions.length));
          
// //             }
          
// //             return outString;
// //           }
// //           const rand=()=>{
// //             d=makeString()+".jpg"
// //             // console.log("d",d)
// //           }
// //         rand()
// //         console.log('d',d)
// //         cb(null,d)
// //     }
// // });
// // var upload=multer({storage:store})
// router.post('/upload',upload.single('file'),function(req,res){
//     // console.log(req.body.rand)
//     console.log(req.file.filename)
//     res.send(JSON.stringify("sucess"))
// })
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
    if(!selecteddays.length){
        selecteddays=req.body.days
    }
    tutorsubject=req.body.subject
    tutortime=req.body.teachingtime
    timeduration=req.body.timeduration
    tutorcoursetype=req.body.coursetype 
    tutorfee=req.body.fee 
    tutordescription=req.body.description 
    tutorwatsuplink=req.body.watsuplink
    tutormail=req.session.mail
    tutorsubsubject=req.body.subsubject
    if(req.body.date===""){
        myobj={tutorimage:req.session.userimage,tutorname:req.session.username,tutorsubject:tutorsubject,tutormail:tutormail,tutorlocation:req.session.location,tutorsubsubject:req.body.subsubject,
        tutormail:tutormail,tutorcoursetype:tutorcoursetype,tutorfee:tutorfee,tutordescription:tutordescription,tutortime:tutortime,timeduration:timeduration, tutorwatsuplink:tutorwatsuplink,selecteddays:selecteddays,likes:0
    }
        dbo.collection("continousteacher").insertOne(myobj, function(err, res) {
            
        })
    }
    else
    {
        // for date
        time=new Date()
var date=time.getDate();
var month=time.getMonth()+1;
var year=time.getFullYear()
var dt = dateTime.create();
todaydate=year+'-'+month+'-'+date        
        // for once
        myobj={tutorimage:req.session.userimage,tutorname:req.session.username,tutorsubject:tutorsubject,tutormail:tutormail,tutorlocation:req.session.location,tutorsubsubject:req.body.subsubject,
            tutormail:tutormail,tutorcoursetype:tutorcoursetype,tutorfee:tutorfee,tutordescription:tutordescription,tutortime:tutortime,timeduration:timeduration, tutorwatsuplink:tutorwatsuplink,
            maxstudents:req.body.maxstudents,tutordate:new Date(req.body.date),tuorgdate:req.body.date,
        }
        console.log(JSON.stringify(myobj))
        dbo.collection("onceteacher").insertOne(myobj, function(err, res) {
            
        })

    }








    // myobj={tutorimage:d,tutorname:req.session.username,tutorsubject:tutorsubject,tutortime:tutortime,
    //     tutorcoursetype:tutorcoursetype,tutorfee:tutorfee,tutordescription:tutordescription,
    //     tutorwatsuplink:tutorwatsuplink,selecteddays:selecteddays
    // ,likes:0,tutormail:tutormail,tutorlocation:req.session.location,tutorsubsubject:req.body.subsubject,maxstudents:req.body.maxstudents}
    //     dbo.collection("tutors").insertOne(myobj, function(err, res) {
            
    //     })
res.send(true)
})



module.exports=router 
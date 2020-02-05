const express=require('express')
const multer=require('multer')
const path=require('path')
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
var subjectsarr=[]
var subsubjectarr=[]
var d

var store=multer.diskStorage({
destination:function(req,file,cb){
        cb(null,'./src/assets/uploads1')
    },
    filename:function(req,file,cb){
        // console.log("c"+JSON.stringify(file))
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
            // console.log("d",d)
          }
        rand()
        console.log('d',d)
        cb(null,d)
    }
});
var upload=multer({storage:store})
router.post('/upload',upload.single('file'),function(req,res){
    // console.log(req.body.rand)
    console.log(req.file.filename)
    res.send(JSON.stringify("sucess"))
})




router.post('/',function(req,res){
    // console.log(typeof(makeid(5)));

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
    check=0
    // for subjects
    for(i=0;i<subjectsarr.length;i++){
        if(subjectsarr[i]==tutorsubject)
        {check=1}
    }
    if(check==0){
        subjectsarr.push(tutorsubject)
    }    
    tutortime=req.body.time
    tutorcoursetype=req.body.coursetype 
    tutorfee=req.body.fee 
    tutordescription=req.body.description 
    tutorwatsuplink=req.body.watsuplink
    tutorday=req.body.day
    tutormail=req.session.mail
    tutorsubsubject=req.body.subsubject
    // for subsubject
    check1=0
    checksub=0
//     for(i=0;i<subsubjectarr.length;i++){
//         // if subject exists
// if(tutorsubject==Object.keys(subsubjectarr[i]))
// {
// // check for subject exists
//     check1=1
//     temp=[]
//     var temp=subsubjectarr[i][tutorsubject]
//     for(j=0;j<temp.length;j++){
//         if(temp[i]==tutorsubsubject){
// // if subsubjectexists
// checksub=1
//         }
//     }
//     if(checksub==0){
//         temp.push(tutorsubsubject)
//         subsubjectarr[i][tutorsubject]=temp
//         console.log(subsubjectarr[i][tutorsubject])
//     }
// }
//     }
//     if(check1==0){
//         var c={}
//         c[tutorsubject]=[tutorsubsubject]
//         subsubjectarr.push(c)
//         console.log("sub subject"+JSON.stringify(subsubjectarr))
//     }
// console.log('d',d)
myobj={tutorimage:d,tutorname:req.session.username,tutorsubject:tutorsubject,tutortime:tutortime,
        tutorcoursetype:tutorcoursetype,tutorfee:tutorfee,tutordescription:tutordescription,
        tutorwatsuplink:tutorwatsuplink,tutorday:tutorday,tutorparticipitation:true,selecteddays:selecteddays
    ,likes:0,tutormail:tutormail,tutorlocation:req.session.location,tutorsubsubject:req.body.subsubject}
        dbo.collection("tutors").insertOne(myobj, function(err, res) {
            
        })
res.send(true)
})
// var store=multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null,'./uploads')
//     },
//     filename:function(req,file,cb){
//         cb(null,"filename")
//     }
// });
// var upload=multer({storage:store}).single('file');

// router.post('/image',function(req,res){
//     upload(req,res,function(err){
//         if(err){
//             res.send(JSON.stringify("error"))
//         }
//         else
//         res.send(JSON.stringify("sucess"))
//     })
// res.send(JSON.stringify("after"))
// })
// router.get('/sujects',function(req,res){

// res.send(JSON.stringify(subjectsarr))
// })

// router.get('/subsubjects',function(req,res){
//     res.send(JSON.stringify(subsubjectarr))
// })



module.exports=router 
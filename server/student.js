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
router.get('/subjects',function(req,res){
    var subjectarray=[]
    dbo.collection('tutors').find({}).toArray(function(err,result){
        for(i=0;i<result.length;i++){
            check=0
            for(j=0;j<subjectarray.length;j++){
                if(subjectarray[j]==result[i].tutorsubject){
                    check=1
                }
                }
                if(check==0)
                {
                    subjectarray.push(result[i].tutorsubject)
                }
           
        }
    res.send(JSON.stringify(subjectarray))
    })
})
router.post('/subsubjects',function(req,res){
    console.log(JSON.stringify(req.body))
    var c={tutorsubject:req.body.subject}
    var subsubjectarray=[]
    dbo.collection('tutors').find(c,{$exists:true}).toArray(function(err,result){
        for(i=0;i<result.length;i++){
            check=0
            
            for(j=0;j<subsubjectarray.length;j++){
                if(subsubjectarray[j]==result[i].tutorsubsubject){
                    check=1
                    console.log("entered")
                }
                }
                if(check==0)
                {
                    subsubjectarray.push(result[i].tutorsubsubject)
                }
           
        }
    res.send(JSON.stringify(subsubjectarray))
    })
    
    
})
router.post('/filter',function(req,res){
    var c={tutorsubject:req.body.subject,tutorsubsubject:req.body.subsubject}
    dbo.collection("tutors").find(c,{$exists:true}).toArray(function(err,response){
        res.send(JSON.stringify(response))

    })
    // res.send(JSON.stringify("sucess of fiter"))
})

module.exports=router
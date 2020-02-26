const express=require('express')
const router=express.Router()
var dateTime = require('node-datetime');
var MongoClient = require('mongodb').MongoClient;
var dbo=''
var checkuser
var temp
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
      if (err) throw err;
       dbo = db.db("mydb");
    });
    time=new Date()
var date=time.getDate();
var month=time.getMonth();
var year=time.getFullYear()
var dt = dateTime.create();
var formatted = dt.format('Y-m-d H:M:S');
todaydate=year+'-'+month+'-'+date
var subjectarray=[]
var subsubjectarray=[]
var checkuser=[]
router.get('/', function(req,res){
    // for date
    time=new Date()
var date=time.getDate();
var month=time.getMonth()+1;
var year=time.getFullYear()
var dt = dateTime.create();
var formatted = dt.format('Y-m-d H:M:S');
todaydate=year+'-'+month+'-'+date
var time1=todaydate+'T'+time.getHours()+':'+time.getMinutes()+':'+time.getSeconds()+'Z'
    checkuser=[]
    c={tutorlocation:req.session.location}
    dbo.collection("continousteacher").find(c,{$exists:true}).sort({"likes":-1}).toArray(function(err, result) {
        if (err) throw err;
        if(result.length){
        checkuser=result
    }
        d={tutorlocation:req.session.location,maxstudents: { $gt: 0 },tutordate:{$gte:new Date()}} 

        dbo.collection("onceteacher").find(d).sort({"tutordate":1}).toArray(function(err,result1){
            if(err) throw err
            if(result1.length){
            for(i=0;i<result1.length;i++)
            checkuser.push(result1[i])
           }
           res.send(JSON.stringify(checkuser))
        });
      });    
})
router.get('/subjects',function(req,res){
        // for date
        time=new Date()
        var date=time.getDate();
        var month=time.getMonth()+1;
        var year=time.getFullYear()
        var dt = dateTime.create();
        var formatted = dt.format('Y-m-d H:M:S');
        todaydate=year+'-'+month+'-'+date
        
    subjectarray=[]
    subsubjectarray=[]
    dbo.collection('continousteacher').find({tutorlocation:req.session.location}).toArray(function(err,result){
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
                }}
                var e={tutordate: { $gte:new Date()},tutorlocation:req.session.location}
               dbo.collection('onceteacher').find(e,{$exists:true}).toArray(function(err,result1){
                for(i=0;i<result1.length;i++){
                    check=0
                    for(j=0;j<subjectarray.length;j++){
                        if(subjectarray[j]==result1[i].tutorsubject){
                            check=1
                        }
                        }
                        if(check==0)
                        {
                            subjectarray.push(result1[i].tutorsubject)
                        }}
                        res.send(JSON.stringify(subjectarray))
               }) 
           
        
   
    })
})
router.post('/subsubjects',function(req,res){
        // for date
        time=new Date()
        var date=time.getDate();
        var month=time.getMonth()+1;
        var year=time.getFullYear()
        var dt = dateTime.create();
        var formatted = dt.format('Y-m-d H:M:S');
        todaydate=year+'-'+month+'-'+date
        
    subsubjectarray=[]
    var c={tutorsubject:req.body.subject,tutorlocation:req.session.location}
    dbo.collection('continousteacher').find(c,{$exists:true}).toArray(function(err,result){
        if(result.length){
        for(i=0;i<result.length;i++){
            check=0
            
            for(j=0;j<subsubjectarray.length;j++){
                if(subsubjectarray[j]==result[i].tutorsubsubject){
                    check=1
                }
                }
                if(check==0)
                {
                    subsubjectarray.push(result[i].tutorsubsubject)
                }
           
        }}
        var e={tutorsubject:req.body.subject,tutordate:{ $gte:new Date()},tutorlocation:req.session.location}
        dbo.collection('onceteacher').find(e,{$exists:true}).toArray(function(err,result1){
            if(result1.length){
            for(i=0;i<result1.length;i++){
                check=0
                
                for(j=0;j<subsubjectarray.length;j++){
                    if(subsubjectarray[j]==result1[i].tutorsubsubject){
                        check=1
                    }
                    }
                    if(check==0)
                    {
                        subsubjectarray.push(result1[i].tutorsubsubject)
                    }
               
            }}
            res.send(JSON.stringify(subsubjectarray))
        })    
    
    })
    
    
})
router.post('/filter',function(req,res){
        // for date
        time=new Date()
        var date=time.getDate();
        var month=time.getMonth()+1;
        var year=time.getFullYear()
        var dt = dateTime.create();
        var formatted = dt.format('Y-m-d H:M:S');
        todaydate=year+'-'+month+'-'+date
        
checkuser=[]
    var c={tutorsubject:req.body.subject,tutorsubsubject:req.body.subsubject,tutorlocation:req.session.location}
    dbo.collection("continousteacher").find(c,{$exists:true}).toArray(function(err,response){
        if (err) throw err;
        checkuser=response
        var e={tutorlocation:req.session.location,tutorsubject:req.body.subject,tutorsubsubject:req.body.subsubject,tutordate:{ $gt:new Date()  }}
        dbo.collection("onceteacher").find(e).toArray(function(err,result1){
            if(err) throw err
            for(i=0;i<result1.length;i++)
            checkuser.push(result1[i])
            res.send(JSON.stringify(checkuser))
        })
        

    })
    // res.send(JSON.stringify("sucess of fiter"))
})
router.post('/coursetype',function(req,res){
        // for date
        time=new Date()
        var date=time.getDate();
        var month=time.getMonth()+1;
        var year=time.getFullYear()
        var dt = dateTime.create();
        var formatted = dt.format('Y-m-d H:M:S');
        todaydate=year+'-'+month+'-'+date
        req.body["tutorlocation"]=req.session.location

checkuser=[]
    dbo.collection("continousteacher").find(req.body,{$exists:true}).toArray(function(err,response){
        if (err) throw err;
        if(response.length){
        checkuser=response
    }
    req.body["tutordate"]={ $gte:new Date()} 
        dbo.collection("onceteacher").find(req.body).toArray(function(err,result1){
            if(err) throw err
            if(result1.length){
            for(i=0;i<result1.length;i++)
            checkuser.push(result1[i])}
            res.send(JSON.stringify(checkuser))
        })
    })
})

router.get('/todayclasses',function(req,res){
    time=new Date()
    var date=time.getDate();
    var month=time.getMonth()+1;
    if(month<10)
    month='0'+month
    var year=time.getFullYear()
    var dt = dateTime.create();
    var formatted = dt.format('Y-m-d H:M:S');
    todaydate=year+'-'+month+'-'+date
    var f={tuorgdate:todaydate,tutorlocation:req.session.location}
    dbo.collection('onceteacher').find(f,{$exists:true}).toArray(function(err,response){
        if(err)throw err
        checkuser=response
        res.send(JSON.stringify(checkuser))
    })
})
module.exports=router



// for not showing their respective courses
// ,tutormail:{$ne:req.session.mail}
const express=require('express')
const app=express()
const router=express.Router()
const multer=require('multer')

const session=require('express-session')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var dbo=''
var d

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
   dbo = db.db("mydb");
});
var store=multer.diskStorage({
    destination:function(req,file,cb){
            cb(null,'./server/uploads1')
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
  
router.post('/',upload.single('file'),function(req,res){
    d=req.file.filename
usermail=req.session.mail
var c = { $set: {userimage:d}};
req.session.userimage=d
console.log('check',req.session)
var query={usermail:usermail}
dbo.collection('customers').updateOne(query,c,function(err,res1){
    if(err)throw err
    console.log('d',d)
    res.send(JSON.stringify("ok"))

})
})
module.exports=router
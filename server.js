const express=require('express')
const bodyparser=require('body-parser')
var cookieParser = require('cookie-parser');
const session=require('express-session')
const path=require('path')
const login=require('./server/login')
const register=require('./server/register')
const student=require('./server/student')
const tutor=require('./server/tutor')
const dashboard=require('./server/dashboard')
const subjectselected=require('./server/subjectselected')
const logout=require('./server/logout')
const like=require('./server/like')
const dislike=require('./server/dislike')
const app=express();
const cors=require('cors')
app.use(cookieParser());
// for checking session in home page
const sessioncheck=require('./server/session')
// app.use(cors({origin:'http://localhost:4200',credentials=true}))

app.use(express.static(path.join(__dirname,'dist/updated')))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

// app.get('/',function(req,res){
//   console.log("in main"+req.session)
//   res.send(__dirname+'dist/updated/index.html')
// })


var sess={
  name:'sid',
  resave:false,
  saveUninitialized:true,
  secret:'a',
  
  cookie:{
    maxAge:100*60*69*2,
    sameSite:false,
    secure:false,
    httpOnly:false,
  }  
}
app.use(session(sess))
app.use(cors({credentials: true, origin: 'http://localhost:4200'}));

const redirectlogin=(req,res,next)=>{
  if(!req.session.mail){
    console.log('redirect to login')
    res.send(JSON.stringify("redirect to login"))
  }
  else{
    console.log('exists')
    next()
  }
}
// redirect home after register
const redirecthome=(req,res,next)=>{
  if(!req.session.mail){
    console.log("register or login")
    res.send(true)
  }
  else{
    console.log("redirect to home")
    next();
  }
}
app.use('/logout',redirecthome,logout)
app.use('/login',login)
app.use('/register',register)
app.use('/student',student)
app.use('/dislike',dislike)
app.use('/tutor',redirectlogin,tutor)
app.use('/subjectselected',redirectlogin,subjectselected)
app.use('/dashboard',redirectlogin,dashboard)
app.use('/session',sessioncheck)
app.use('/like',like)
var name
var address
app.get('/imageget',function(req,res){
  name=req.query['name']
  address=__dirname+'/server/uploads1/'+name
  res.sendFile(address)
})

// app.get('/users',function(req,res){
//   console.log("using put request")
//   res.send('hello')
// })
app.get('/*',function(req,res){
  // console.log("in wild"+JSON.stringify(req.session))
  res.sendFile(__dirname+'/dist/updated/index.html')
})
app.listen(3000)
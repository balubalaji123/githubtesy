import { Component, OnInit } from '@angular/core';
import {Register} from '../register';
import { Router, RouterModule } from '@angular/router';
import {Googlepassword} from '../googlepassword';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import{RegisterService} from'../register.service'
import{GoogleloginService} from'../googlelogin.service'
import { AuthService, GoogleLoginProvider } from 'angular-6-social-login';
import{SessioncheckService}from'../sessioncheck.service'
import { Googlepw } from '../googlepw';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  imageUrl: string ="/assets/MM.png";
  public checklogin=true
public a;
// public imageUrl;
public functionreturn;
public b=false;
public pw=false;
public password2;
public googlemail;
public googleuser;
public tonavnextpage;
public login1=false;
<<<<<<< HEAD
// public imageUrl = '../../assets/TeacherStudent.jpg';
=======
public imageUrl = '../../assets/default.jpg';
>>>>>>> d58201f3a89b5ac8e9ab7b3141a253ce3c1d3f71
public uri='http://localhost:3000/register/upload'
public users1;
public gpw=false;
public images
public imageurl="../../assets/default.jpg"
  registermodel=new Register('','','','','');
  gpwmodel = new Googlepw('','')
  reg:Googlepassword
  googlepasswordmodel=new Googlepassword('fgh','fcgvhbj','')
  constructor(private sessionservice:SessioncheckService, private register:RegisterService,public route:Router,private socialAuthService: AuthService,public googleregister1:GoogleloginService,private http: HttpClient) { }
  ngOnInit() {
  }
  onsubmit(x,y){
    console.log(this.registermodel)
    this.functionreturn=this.onclick(x,y)
    if(this.functionreturn)
    {
this.register.register(this.registermodel)
.subscribe(
  data=>{console.log("register"+data);
if(data=="useralreadyexists"){
  this.login1=true;
  this.a=false
  // this.route.navigate(['/login1'])
}
},
  error=>console.log(error)
)
    }
  }
  verify(){
    this.checklogin=false
  }
  onclick(x,y){ 
    if(x==y)
    {
        this.b=false ;
        this.a=true;
        return true
    }
    else
    {
      this.a=false;
      this.b=true;
      console.log("b is going onclick method"+this.b);
      return false;
    }
  }
  onclick1(x1,y1){ 
    if(x1==y1)
    {
      console.log("b value at onclick1 method password matched"+this.b);
        return true;
    }
    else
    {
      this.gpw=true;
      console.log("b value at onclick1 method pwnot matched"+this.b);
      return false;
    }
  }
  gmailpassword(passwordgoogle,repasswordgoogle)
  {
    console.log(this.registermodel)
     }
  check(a:string){
    this.pw=true; 
    this.b=false; 
    console.log(""+this.pw)
    this.socialSignIn(a)
    console.log("b value"+this.b);
  }
   socialSignIn(socialPlatform : string) {
     this.b=false;
    let socialPlatformProvider;
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
    this.googlemail=userData.email;
    this.googleuser=userData.name;
        // console.log(this.password2);
        // Now sign-in with userData
        // ...  
      }
    );
  }
// model and other suff for gmail login
  onclickme(passwordgoogle,repasswordgoogle){
    this.functionreturn=this.onclick1(passwordgoogle,repasswordgoogle)
    if(this.functionreturn)
    {
      this.googlepasswordmodel.password2=passwordgoogle
this.register.register(this.registermodel)
.subscribe(
  data=>console.log("register"+data),
  error=>console.log(error)
)   
    console.log("gmail password");
    this.reg=new Googlepassword(this.googleuser,this.googlemail,passwordgoogle)
this.googleregister1.googlelogin(this.reg)
.subscribe(
  data=>{console.log("hii"+data);
  if(data=="useralreadyexists")
  {
    this.route.navigate(['/login1']);
    this.login1=true;
  }
  if(data=="account created"){
    this.route.navigate(['/users1']);
    this.users1=true;
  }
  // this.tonavnextpage=nextpage()
},
  error=>console.log("error in google login")
)  
console.log("on click me");
  }}
  onclick2(password2)
  {
    console.log(password2);
    // this.reg.password=password2
    // this.reg.password1=password2
    console.log(this.reg)  
  }
onlogin()
{
  this.route.navigate(['/login1'])
}
selectimage(event){
  if(event.target.files.length>0){
    const file=event.target.files[0]
this.images=file
this.imageUrl=event.target.result
console.log(this.imageUrl)
  }
}
onimage(){
  const formdata=new FormData()
  console.log("on image")
  formdata.append('file',this.images)
  this.http.post<any>(this.uri,formdata).subscribe(
    data=>console.log(data),
    error=>console.log(error)
  ) 
}


fileToUpload: File = null;
handleFileInput(file: FileList) {
  this.fileToUpload = file.item(0);
  var reader = new FileReader();
  reader.onload = (event : any) => {
    this.imageUrl = event.target.result;
  }
  reader.readAsDataURL(this.fileToUpload);
   console.log(file);
}
}

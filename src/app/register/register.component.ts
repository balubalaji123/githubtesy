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
public imageUrl1 = '../../assets/default.jpg';
public uri='http://192.168.43.5:3000/register/upload'
public users1;
public gpw=false;
public images
public location
public imageurl="../../assets/default.jpg"
//i am adding here first and sec card
public forseccard=false;
public forfircard=true;

  registermodel=new Register('','','','','');
  gpwmodel = new Googlepw('','')
  reg:Googlepassword
  constructor(private sessionservice:SessioncheckService, private register:RegisterService,public route:Router,private socialAuthService: AuthService,public googleregister1:GoogleloginService,private http: HttpClient) { }
  ngOnInit() {
  }
  onsubmit(x,y){
    this.functionreturn=this.onclick(x,y)
    if(this.functionreturn)
    {
this.register.register(this.registermodel)
.subscribe(
  data=>{
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
      return false;
    }
  }
  onclick1(x1,y1){ 
    if(x1==y1)
    {
        return true;
    }
    else
    {
      this.gpw=true;
      return false;
    }
  }
  gmailpassword(passwordgoogle,repasswordgoogle)
  {
     }
  check(a:string){

    this.forfircard=false;
    this.pw=true; 
    this.b=false; 


    this.forseccard=true;

    console.log(""+this.pw)

    this.socialSignIn(a)
  }
   socialSignIn(socialPlatform : string){
     this.b=false;
    let socialPlatformProvider;
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
    this.googlemail=userData.email;
    this.googleuser=userData.name;

        // Now sign-in with userData
        // ...  
      }
    );
  }
// model and other suff for gmail login
  onclickme(passwordgoogle,repasswordgoogle,location){
    this.functionreturn=this.onclick1(passwordgoogle,repasswordgoogle)
    if(this.functionreturn)
    {
      this.location=location
      // this.googlepasswordmodel.password2=passwordgoogle
this.register.register(this.registermodel)
.subscribe(
  data=>{},
  error=>console.log(error)
)   
  
    this.reg=new Googlepassword(this.googleuser,this.googlemail,passwordgoogle,this.location)
this.googleregister1.googlelogin(this.reg)
.subscribe(
  data=>{console.log(data)
  if(data=="useralreadyexists")
  {
    this.route.navigate(['/login1']);
    this.login1=true;
  }
  if(data=="account created"){
    this.route.navigate(['/users1']);
    this.users1=true;
  }
  
},
  error=>console.log("error in google login")
)  

  }}
  onclick2(password2)
  {
  }
onlogin()
{
  this.route.navigate(['/login1'])
}
selectimage(event){
  if(event.target.files.length>0){
    const file=event.target.files[0]
this.images=file
var reader = new FileReader();
  reader.onload = (event : any) => {
    this.imageUrl = event.target.result;

  }
  reader.readAsDataURL(file);
  }
}

onimage(){
  const formdata=new FormData()
  formdata.append('file',this.images)
  this.http.post<any>(this.uri,formdata).subscribe(
    data=>{},
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

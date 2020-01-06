import { Component, OnInit } from '@angular/core';
import {Register} from '../register';
import { Router, RouterModule } from '@angular/router';
import {Googlepassword} from '../googlepassword';
import { from } from 'rxjs';
import{RegisterService} from'../register.service'
import{GoogleloginService} from'../googlelogin.service'
import { AuthService, GoogleLoginProvider } from 'angular-6-social-login';
import{SessioncheckService}from'../sessioncheck.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
public checklogin=true
public a;
public functionreturn;
public b;
public pw=false;
public password2;
public googlemail;
public googleuser;
public tonavnextpage;
public login1;
public users1;
  registermodel=new Register('','','','')
  reg:Googlepassword
  googlepasswordmodel=new Googlepassword('fgh','fcgvhbj','')
  constructor(private sessionservice:SessioncheckService, private register:RegisterService,public route:Router,private socialAuthService: AuthService,public googleregister1:GoogleloginService) { }
  ngOnInit() {
  }
  onsubmit(x,y){
    console.log(this.registermodel)
    this.functionreturn=this.onclick(x,y)
    if(this.functionreturn)
    {
this.register.register(this.registermodel)
.subscribe(
  data=>console.log("register"+data),
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
  check(a:string){
    this.pw=true;  
    console.log(""+this.pw)
    this.socialSignIn(a)

  }
   socialSignIn(socialPlatform : string) {
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
  onclickme(a:string){
    this.reg=new Googlepassword(this.googleuser,this.googlemail,a)
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
  }

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
}

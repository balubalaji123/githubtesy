import { Component, OnInit } from '@angular/core';
import {Register} from '../register';
import { Router, RouterModule } from '@angular/router';
import {Googlepassword} from '../googlepassword';
import { from } from 'rxjs';
import{RegisterService} from'../register.service'
import{GoogleloginService} from'../googlelogin.service'
import { AuthService, GoogleLoginProvider } from 'angular-6-social-login';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
public checklogin=true
public a;
public b;
public pw=false;
public password2;
public googlemail;
public googleuser;
  registermodel=new Register('','','','')
  reg:Googlepassword
  googlepasswordmodel=new Googlepassword('fgh','fcgvhbj','')
  constructor( private register:RegisterService,public route:Router,private socialAuthService: AuthService,public googleregister1:GoogleloginService) { }
  ngOnInit() {
  }
  onsubmit(){
this.register.register(this.registermodel)
.subscribe(
  data=>console.log("register"+data),
  error=>console.log(error)
)
  }
  verify(){
    this.checklogin=false
  }
  onclick(x,y){ 
    if(x==y)
    {
        this.b=false ;
        this.a=true;
    }
    else
    {
      this.a=false;
      this.b=true;
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
    console.log("check"+JSON.stringify(this.reg))
    console.log('a'+a)
this.googleregister1.googlelogin(this.reg)
.subscribe(
  data=>console.log(data),
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

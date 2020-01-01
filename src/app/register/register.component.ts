import { Component, OnInit } from '@angular/core';
import {Register} from '../register'
import { from } from 'rxjs';
import{RegisterService} from'../register.service'
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
  registermodel=new Register('','','','')
  constructor( private register:RegisterService,private socialAuthService: AuthService) { }

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
  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
  
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        // Now sign-in with userData
        // ...
            
      }
    );
  }
  

}

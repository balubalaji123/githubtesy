import { Component, OnInit } from '@angular/core';
import { GoogleLoginProvider, AuthService,SocialLoginModule } from 'angular-6-social-login';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
// export class GoogleComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
export class GoogleComponent implements OnInit {
  
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }
 
  constructor( private socialAuthService: AuthService ) {}
  
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
  
  // ngOnInit(): void {
    
  // }
}

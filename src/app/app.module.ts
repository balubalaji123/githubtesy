import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import{HttpClientModule} from '@angular/common/http'
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { TutorComponent } from './tutor/tutor.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { CourseselectedComponent } from './courseselected/courseselected.component';
import { FiresthomeComponent } from './firesthome/firesthome.component';
import { CongratsComponent } from './congrats/congrats.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import{GoogleLoginProvider, FacebookLoginProvider, SocialLoginModule, AuthServiceConfig} from "angular-6-social-login";
import { GoogleComponent } from './google/google.component';
import { NavbarComponent } from './navbar/navbar.component'
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("965555276720-hc80ve6rrpu9d5nkcd4abud1qvfk75mc.apps.googleusercontent.com"),
        },
      ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    TutorComponent,
    HomeComponent,
    StudentComponent,
    CourseselectedComponent,
    FiresthomeComponent,
    CongratsComponent,
    DashboardComponent,
    GoogleComponent,
    NavbarComponent,
    // SocialLoginModule,
    // AuthServiceConfig
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    // AuthServiceConfig,
    // GoogleLoginProvider,
    // FacebookLoginProvider,
    SocialLoginModule


  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

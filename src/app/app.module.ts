import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

// import { FileUploadModule } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { TutorComponent } from './tutor/tutor.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { CourseselectedComponent } from './courseselected/courseselected.component';
import { FiresthomeComponent } from './firesthome/firesthome.component';
import { CongratsComponent } from './congrats/congrats.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GoogleLoginProvider, FacebookLoginProvider, SocialLoginModule, AuthServiceConfig } from "angular-6-social-login";
import { GoogleComponent } from './google/google.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
// import { ListComponent } from './list/list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
// import { ForgotpwComponent } from './forgotpw/forgotpw.component';

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider("965555276720-hc80ve6rrpu9d5nkcd4abud1qvfk75mc.apps.googleusercontent.com"),
    },
  ]);
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
    ProfileComponent,
    AboutComponent,
    ForgotpasswordComponent,
    PagenotfoundComponent,
    // ForgotpwComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatTableModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AmazingTimePickerModule,
    // FileUploadModule,

    // AuthServiceConfig,
    // GoogleLoginProvider,
    // FacebookLoginProvider,
    SocialLoginModule,

    BrowserAnimationsModule

  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }

  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}


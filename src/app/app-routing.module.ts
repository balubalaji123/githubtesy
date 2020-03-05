import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FiresthomeComponent } from './firesthome/firesthome.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { TutorComponent } from './tutor/tutor.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

// import { ListComponent } from './list/list.component';

import { ProfileComponent } from './profile/profile.component';
import { CourseselectedComponent } from './courseselected/courseselected.component';
import { CongratsComponent } from './congrats/congrats.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'',redirectTo:'firesthome',pathMatch:'full'},
  {path:'',component:FiresthomeComponent},
    // {path:'list',component: ListComponent},
  {path:'firesthome',component:FiresthomeComponent},
  {path:'register1',component:RegisterComponent},
  {path:'users1',component:HomeComponent},
  {path:'login1',component:LoginComponent},
  {path:'student1',component:StudentComponent},
  {path:'tutor1',component:TutorComponent},
  {
    path:'dashboard1',
    component:DashboardComponent
    
   },
  {path: 'navbar' , component:NavbarComponent},
  {path:'profile',component:ProfileComponent},
  {path:'about',component:AboutComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'congrats',component:CongratsComponent},
  {path:'courseselected',component:CourseselectedComponent},
  {path:"**",component:PagenotfoundComponent}
  // {path:'profile',component:ProfileComponent}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

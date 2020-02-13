import { Component, OnInit } from '@angular/core';
import{SessioncheckService}from '../sessioncheck.service';
import{LogoutService} from'../logout.service'
import { from } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(dashboard:DashboardService,public sessionservice:SessioncheckService,public logoutservice:LogoutService,public route:Router) {
  //   sessionservice.sessioncheck().subscribe(
  //     data=>{console.log("in session"+JSON.stringify(data.userimage)),this.userimage=data.userimage},
  //           error=>console.log(error)
  //   )
  dashboard.profiledata().subscribe(
    data=>this.user=data,
    error=>console.log(error)
  )
  

   }
public user

  ngOnInit() {

  }
  logout(){
    this.logoutservice.logout()
    .subscribe(
      data=>{console.log("logout component "+data)},
      error=>console.log(error)
    )
    this.route.navigate([''])

  }
}

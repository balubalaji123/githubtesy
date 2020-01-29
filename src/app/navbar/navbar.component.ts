import { Component, OnInit } from '@angular/core';
import{SessioncheckService}from '../sessioncheck.service';
import{LogoutService} from'../logout.service'
import { from } from 'rxjs';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public sessionservice:SessioncheckService,public logoutservice:LogoutService,public route:Router) {
    sessionservice.sessioncheck().subscribe(
      data=>{console.log("in session"+data),this.username=data},
            error=>console.log(error)
    )
   }
public username

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

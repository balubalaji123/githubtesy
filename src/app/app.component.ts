import { Component } from '@angular/core';
import{LogoutService} from'./logout.service'
import { from } from 'rxjs';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'updated';
  constructor(public logoutservice:LogoutService,public route:Router){}
  logout(){
    this.logoutservice.logout()
    .subscribe(
      data=>{console.log("logout component "+data)},
      error=>console.log(error)
    )
    this.route.navigate([''])

  }
}

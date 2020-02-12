import { Component } from '@angular/core';
import{LogoutService} from'./logout.service'
import { from } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { AmazingTimePickerService } from 'amazing-time-picker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'updated';
  constructor(public logoutservice:LogoutService,public route:Router, private atp: AmazingTimePickerService){}
  logout(){
    this.logoutservice.logout()
    .subscribe(
      data=>{console.log("logout component "+data)},
      error=>console.log(error)
    )
    this.route.navigate([''])

  }
  open() {
    const amazingTimePicker = this.atp.open();
    amazingTimePicker.afterClose().subscribe(time => {
      console.log(time);
    });
  }

}

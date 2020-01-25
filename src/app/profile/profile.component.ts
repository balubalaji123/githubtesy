import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../dashboard.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(dashboard:DashboardService) {
dashboard.profiledata().subscribe(
  data=>this.profile=data,
  error=>console.log(error)
)
   }

  ngOnInit() {
  }
  public profile

}

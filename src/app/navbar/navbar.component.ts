import { Component, OnInit } from '@angular/core';
import{SessioncheckService}from '../sessioncheck.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public sessionservice:SessioncheckService) {
    sessionservice.sessioncheck().subscribe(
      data=>{console.log("in session"+data),this.username=data},
            error=>console.log(error)
    )
   }
public username

  ngOnInit() {

  }

}

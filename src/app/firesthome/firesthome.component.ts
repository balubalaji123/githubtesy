import { Component, OnInit } from '@angular/core';
import{SessioncheckService}from '../sessioncheck.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-firesthome',
  templateUrl: './firesthome.component.html',
  styleUrls: ['./firesthome.component.css']
})
export class FiresthomeComponent implements OnInit {
  constructor(public sessionservice:SessioncheckService) {
    sessionservice.sessioncheck().subscribe(
      data=>console.log(data),
      error=>console.log(error)
    )
   }
  ngOnInit() {
  }

}

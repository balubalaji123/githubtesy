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
      data=>{console.log(data),this.username=data;
      if(this.username=="session not exists"){
      this.normalnavbar=false
    console.log("entered")}
      else
      this.sessionnavbar=false
      
      },
      error=>console.log(error)
    )
   }
  ngOnInit() {
  }
  public username
  public normalnavbar=true
  public sessionnavbar=true

}

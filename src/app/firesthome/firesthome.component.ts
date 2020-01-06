import { Component, OnInit } from '@angular/core';
import{SessioncheckService}from '../sessioncheck.service'
import { from } from 'rxjs';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-firesthome',
  templateUrl: './firesthome.component.html',
  styleUrls: ['./firesthome.component.css']
})
export class FiresthomeComponent implements OnInit {
  constructor(public sessionservice:SessioncheckService,public route:Router) {
    sessionservice.sessioncheck().subscribe(
      data=>{console.log(data),this.username=data;
      if(this.username=="session not exists"){
      this.normalnavbar=false
    }
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
  dashboard(){
    this.route.navigate(['/dashboard1'])
  }
  
}

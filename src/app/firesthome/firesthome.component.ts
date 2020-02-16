import { Component, OnInit } from '@angular/core';
import{SessioncheckService}from '../sessioncheck.service'
import { from } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import{LogoutService} from'../logout.service'


@Component({
  selector: 'app-firesthome',
  templateUrl: './firesthome.component.html',
  styleUrls: ['./firesthome.component.css']
})
export class FiresthomeComponent implements OnInit {
  constructor(public sessionservice:SessioncheckService,public route:Router,public logoutservice:LogoutService) {
    sessionservice.sessioncheck().subscribe(
      data=>{this.username=data;
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
  logout(){
    this.logoutservice.logout()
    .subscribe(
      data=>{
    if(data=="logout sucess"){
      this.normalnavbar=false
      this.sessionnavbar=true


    }
    },
      error=>console.log(error)
    )
    this.route.navigate([''])

  }
}

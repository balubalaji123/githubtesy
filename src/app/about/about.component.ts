import { Component, OnInit } from '@angular/core';
import{SessioncheckService}from '../sessioncheck.service'
import { from } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import{LogoutService} from'../logout.service'


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title = 'how';
  public Btutor = false;
  public Bstu = false;
  public onClickT() {
    this.Btutor = true;
    this.Bstu = false;
    console.log('TUTOR CLICK')
  }
  public onClickS() {
    this.Bstu = true;
    this.Btutor = false;
  }
  constructor(public sessionservice:SessioncheckService,public route:Router,public logoutservice:LogoutService) {
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
  logout(){
    this.logoutservice.logout()
    .subscribe(
      data=>{console.log("logout component "+data);
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

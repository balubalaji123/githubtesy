import { Component, OnInit } from '@angular/core';
import{ForgotpasswordService} from'../forgotpassword.service'
import { from } from 'rxjs';
import { Router, RouterModule } from '@angular/router';

import { error } from 'protractor';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private forgorpassword:ForgotpasswordService,private router:Router) { }

  ngOnInit() {
  }
  public c
  public passwordquery
  public mail
  public check="user not exists"
  public otpchecking="not ok"
  onsubmit(mail){
    this.mail=mail
    this.c={mail1:mail}
    this.forgorpassword.checkemail(this.c).subscribe(
      data=>this.check=data,
      error=>console.log(error)
    )
    
  }
  otpsubmit(otp){
    this.c={otp1:otp}
    this.forgorpassword.checkotp(this.c).subscribe(
      data=>this.otpchecking=data,
      error=>console.log(error)
    ) 
  }
  // for password update
  password(pass){
    this.passwordquery={mail1:this.mail,password:pass}
    this.forgorpassword.updatepassword(this.passwordquery).subscribe(
      data=>{if(data=="updated"){
        this.router.navigate(['/login1'])
      }},
      error=>console.log(error)
    )

  }


}

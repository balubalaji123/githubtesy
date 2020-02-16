import { Component, OnInit } from '@angular/core';
import{ForgotpasswordService} from'../forgotpassword.service'
import {Forgotpw} from '../forgotpw';
// import{Login} from'../login'

import { from } from 'rxjs';
import { Router, RouterModule } from '@angular/router';

import { error } from 'protractor';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  // functionreturn: void;
  constructor(private forgorpassword:ForgotpasswordService,private router:Router) { }

  ngOnInit() {
  }
  checking=new Forgotpw('','')
  public c
  public otpcheck=''
  public gmailcheck=''
  public passwordquery
  public mail
  public check="user not exists"
  public otpchecking="not ok"
  public functionreturn;
  public matched=false;
  public notmatched=false;
  public warning=false;
  onsubmit(mail){
    this.mail=mail
    this.c={mail1:mail}
    this.forgorpassword.checkemail(this.c).subscribe(
      data=>{console.log("check",data),this.check=data,this.gmailcheck=data},
      error=>console.log(error)
    )
    
  }
  otpsubmit(otp){
    this.c={otp1:otp}
    this.forgorpassword.checkotp(this.c).subscribe(
      data=>{console.log("d",data),this.otpchecking=data,this.otpcheck=data},
      error=>console.log(error)
    ) 
  }
  onclick(x,y){
    if(x==y){
      this.matched=true;
      this.notmatched=false;
      return true;
    }
    else{
      this.matched=false;
      this.notmatched=true;
      return false;
    }
  }
  // for password update
  password(pass,conpass)
  {
    this.functionreturn=this.onclick(pass,conpass)
    if(!this.functionreturn)
    {
       this.warning=true;
    }
if(this.functionreturn)
{
    this.passwordquery={mail1:this.mail,password:pass}
    this.forgorpassword.updatepassword(this.passwordquery).subscribe(
      data=>{if(data=="updated")
      {
        this.router.navigate(['/login1'])
      }},
      error=>console.log(error)
    )

  }
}


}

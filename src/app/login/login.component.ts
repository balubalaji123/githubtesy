import { Component, OnInit } from '@angular/core';
import{Login} from'../login'
import { from } from 'rxjs';
import{ LoginService} from'../login.service'
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private login:LoginService,public router:Router) {
   }
public loginexists=true
public entryhome:boolean
public know
public data;
public a;
public passwordwrong=false;
public notexists;
  ngOnInit() {
  }
  check=new Login('','')
  onselect(){
    // this.data=false;
    this.login.login(this.check)
.subscribe(
  (data)=>{this.loginexists=data,this.entryhome=data,console.log(data),this.a=data;
    if(this.a=="not exists")
    {
      //if user not exists
      this.passwordwrong=false;
      this.notexists=true;
    }
    if(this.a=="passwordwrong")
    {
      console.log("gfh");
      this.notexists=false;
      this.passwordwrong=true;
    }
  if(this.a=="account exists")
    {
      //if account exists
      this.router.navigate(['/users1']);
    }},
  error=>console.log(error),
)
// console.log(this.a);

}
}

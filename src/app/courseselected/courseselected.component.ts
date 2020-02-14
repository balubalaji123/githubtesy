import { Component, OnInit, Inject } from '@angular/core';
import{Courseselected} from'../courseselected'
import { EmailValidator } from '@angular/forms';
import{ SubjectselectedService} from'../subjectselected.service'
import { from } from 'rxjs';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { ChecksessionService } from '../checksession.service';
@Component({
  selector: 'app-courseselected',
  templateUrl: './courseselected.component.html',
  styleUrls: ['./courseselected.component.css'],
  inputs:['selectedcouse']
})
export class CourseselectedComponent implements OnInit {
public course=new Array()
public mail
public registermodel:Courseselected
  constructor(public subjectservice:SubjectselectedService,private roter:ActivatedRoute,public router:Router,private chechsession:ChecksessionService) {
      this.chechsession.verifysession().subscribe(
        data=>{if(!data){
          this.router.navigate(['/login1'])
        }}
      )
    
  






    this.name=this.roter.snapshot.paramMap.get('tutorname')
    this.subject=this.roter.snapshot.paramMap.get('tutorsubject')
    this.time=this.roter.snapshot.paramMap.get('tutortime')
    this.coursetype=this.roter.snapshot.paramMap.get('tutorcoursetype')
    this.tutordate=this.roter.snapshot.paramMap.get('tuorgdate')
    this.fee=this.roter.snapshot.paramMap.get('tutorfee')
    this.subsubject=this.roter.snapshot.paramMap.get('tutorsubsubject')
    this.tutormail=this.roter.snapshot.paramMap.get('tutormail')
    this.watsuplink=this.roter.snapshot.paramMap.get('tutorwatsuplink')
this.image=this.roter.snapshot.paramMap.get('tutorimage')

console.log(this.tutordate)
   }
  //  http://localhost:3000/courseselected;_id=5e4044dd303f22c3207fdcb6;tutorimage=null;tutorname=Balaji;tutorsubject=sub1;tutormail=balajipuvvada12289@gmail.com;tutorlocation=bhimavaram;tutorsubsubject=a;tutorcoursetype=Crash;tutorfee=0;tutordescription=daxz;tutortime=23:12;timeduration=1;tutorwatsuplink=fdcvx;maxstudents=10;tutordate=2020-02-10T00:00:00.000Z
  ngOnInit() {
  }
 
  public name
public subject
public time
public coursetype
public tutordate
// courseduration:number,
public fee
public description
public watsuplink
public tutormail
public subsubject
public image    
  fun(a){
this.course=a
// this.mail=b
this.registermodel=new Courseselected(this.name,this.subject,this.tutormail,this.subsubject,this.watsuplink,this.image,this.tutordate,this.time)
console.log("hello"+this.registermodel)
this.subjectservice.subjectselected(this.registermodel)
.subscribe(
  data=>{if(data)
  {
    this.router.navigate(['/dashboard1'])
  }},
  error=>console.log(error)
)
  }
  
}











// public name:string,
// public subject:string,
// public time:number,
// public coursetype:string,
// // courseduration:number,
// public fee:number,
// public description:string,
// public watsuplink:string,
//         public mail:string
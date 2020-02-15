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
public a=false;
public array=new Array()

public split;
public mail;
public selecteddays;
public days={};

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

console.log('data',this.tutordate)
this.selecteddays = this.roter.snapshot.paramMap.get('selecteddays')
console.log('selected',this.selecteddays)
if(this.selecteddays!=null){
var str=this.selecteddays;
console.log(str.length);
var splitted = str.split(","); 
this.days = splitted;
  this.split=splitted.length;
  if(this.split>1)
  {
    this.a=true;
  }

   }
  }
  ngOnInit() {
  }
 
  public name
public subject
public time
public coursetype
public tutordate
public fee
public description
public watsuplink
public tutormail
public subsubject
public image 
public regitered=false
onsel(q1)
{
 //  console.log(q1);
 this.array.push(q1);
 console.log(this.array)
  
}
  fun(a){
this.course=a
// this.mail=b
this.registermodel=new Courseselected(this.name,this.subject,this.tutormail,this.subsubject,this.watsuplink,this.image,this.tutordate,this.time,this.array)
console.log("hello"+this.registermodel)
this.subjectservice.subjectselected(this.registermodel)
.subscribe(
  data=>{console.log('course selected',data);if(data==true)
  {
    this.router.navigate(['/dashboard1'])
  };
  if(data=="already registered")
  {
    this.regitered=true
  }
},
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
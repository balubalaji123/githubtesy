import { Component, OnInit } from '@angular/core';
import{Courseselected} from'../courseselected'
import { EmailValidator } from '@angular/forms';
import{ SubjectselectedService} from'../subjectselected.service'
import { from } from 'rxjs';
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
  constructor(public subjectservice:SubjectselectedService) { }

  ngOnInit() {
  }
 
 
  fun(a){
this.course=a
// this.mail=b
this.registermodel=new Courseselected(this.course[0],this.course[1],this.course[2],this.course[3],this.course[4],this.course[5],this.course[6],this.course[7])
// console.log("hello"+this.registermodel.mail)
this.subjectservice.subjectselected(this.registermodel)
.subscribe(
  data=>console.log("course selected component"+data),
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
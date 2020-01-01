import { Component, OnInit } from '@angular/core';
import{StudentsService} from'../students.service';
import { from } from 'rxjs';
import{Tutor} from '../tutor';
declare const check:any;
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  subjectslist:Tutor[]
public display=false
public selectedcouse=[]
  constructor(private studentservice:StudentsService) {
    studentservice.subjectslist()
    .subscribe(
      data=>{this.subjectslist=data,console.log("students component"+data)},
      error=>console.log(error)
    )
    // for (let index = 0; index < this.subjectslist.length; index++) {
    //   const element = this.subjectslist[index];
    //   console.log("element="+element)
      
    // }
   }

  ngOnInit() {
  }
  subjectselected(a1,a2,a3,a4,a5,a6,a7){
    this.display=true
this.selectedcouse.push(a1)
this.selectedcouse.push(a2)
this.selectedcouse.push(a3)
this.selectedcouse.push(a4)
this.selectedcouse.push(a5)
this.selectedcouse.push(a6)
this.selectedcouse.push(a7)

  }

searchFunction(){
    check();
  }
}



// name:string,
// subject:string,
// time:number,
// coursetype:string,
// // courseduration:number,
// fee:number,
// description:string,
// watsuplink:string
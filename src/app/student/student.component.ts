import { Component, OnInit } from '@angular/core';
import{StudentsService} from'../students.service';
import { from } from 'rxjs';
import{Tutor} from '../tutor';

import{Router} from '@angular/router';
// declare const check: any;

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  subjectslist: Tutor[];
  public searchText;
  public tutormail = false;
public display = false;
public selectedcouse = [];
public fees=["nofees","fees"];
// public subject=["wsfd","sads","csc"];
  // subjectslist:Tutor[]
  // public searchText
  // public tutormail=false
// public display=false
// public selectedcouse=[]
public subsubjects=[];
public allsubjects=[];
  constructor(private studentservice:StudentsService) {
    // to get all subjects list
studentservice.allsubjects().subscribe(
  data=>{console.log("data"+data);this.allsubjects=data},
  error=>console.log(error)
)

// to get all subsubjects
studentservice.allsubsubjects().subscribe(
  data => {console.log(data);this.subsubjects=data},
  error => console.log(error)
)

// to get all details

    studentservice.subjectslist()
    .subscribe(
      data=>{this.subjectslist=data},
      error=>console.log(error)
    )
    // for (let index = 0; index < this.subjectslist.length; index++) {
    //   const element = this.subjectslist[index];
    //   console.log("element="+element)
    // }
   }

  ngOnInit() {
  }
  subjectselected(a1,a2,a3,a4,a5,a6,a7,a8){
    this.display=true
this.selectedcouse.push(a1)
this.selectedcouse.push(a2)
this.selectedcouse.push(a3)
this.selectedcouse.push(a4)
this.selectedcouse.push(a5)
this.selectedcouse.push(a6)
this.selectedcouse.push(a7)
this.selectedcouse.push(a8)

  }
  subjectslist1(q){
      console.log(q);
  }
  onsel(){
    // this.router.navigate(['/list'])
  }
};



// name:string,
// subject:string,
// time:number,
// coursetype:string,
// // courseduration:number,
// fee:number,
// description:string,
// watsuplink:string
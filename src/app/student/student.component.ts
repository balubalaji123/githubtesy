import { Component, OnInit } from '@angular/core';
import{StudentsService} from'../students.service';
import { from } from 'rxjs';
import{Tutor} from '../tutor';
<<<<<<< HEAD

import{Router} from '@angular/router';
// declare const check: any;
=======
import{Subsubject} from '../subsubject'
import{Filter} from'../filter'
import { error } from 'protractor';
import{Coursetype} from'../coursetype'
import { Router, RouterModule } from '@angular/router';
>>>>>>> 280aeba32f85154f2e0830e77de87b8c300dba5a

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
<<<<<<< HEAD
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
=======
  subjectslist:Tutor[]
  public searchText
public display=false
public notfilter=true
public subject
public todayclasseslist:Tutor[]
public   Courses=['Crash','Competative'];
public filterdata:Filter
public subsubject
public allsubjects=[]
public selectedcoursetype:Coursetype
public subsubjects=[]
public subjectoption:Subsubject
public filter:Filter
public selectedsubject:string
  constructor(private studentservice:StudentsService,public router:Router) {
>>>>>>> 280aeba32f85154f2e0830e77de87b8c300dba5a
    // to get all subjects list
studentservice.allsubjects().subscribe(
  data=>{console.log("data"+data);this.allsubjects=data},
  error=>console.log(error)
)
<<<<<<< HEAD

// to get all subsubjects
studentservice.allsubsubjects().subscribe(
  data => {console.log(data);this.subsubjects=data},
  error => console.log(error)
)

=======
>>>>>>> 280aeba32f85154f2e0830e77de87b8c300dba5a
// to get all details

    studentservice.subjectslist()
    .subscribe(
      data=>{console.log("check",data),this.subjectslist=data},
      error=>console.log(error)
    )
<<<<<<< HEAD
    // for (let index = 0; index < this.subjectslist.length; index++) {
    //   const element = this.subjectslist[index];
    //   console.log("element="+element)
    // }
=======
    
    
>>>>>>> 280aeba32f85154f2e0830e77de87b8c300dba5a
   }

  ngOnInit() {
  }
 
  subjectselected(i){

this.display=true
console.log(this.subjectslist[i])
this.router.navigate(['/courseselected',this.subjectslist[i]])

  }

  subjectselection(subject){
    this.subject=subject
    this.subjectoption=new Subsubject(subject)
    this.studentservice.allsubsubjects(this.subjectoption).subscribe(
      data=>this.subsubjects=data,
      err=>console.log(err)
    )
    
  }
<<<<<<< HEAD
  subjectslist1(q){
      console.log(q);
  }
  onsel(){
    // this.router.navigate(['/list'])
=======
  subsubjectselection(subject){
    this.subsubject=subject
    this.filterdata=new Filter(this.subject,this.subsubject)
    this.studentservice.filterdata(this.filterdata).subscribe(
      data=>this.subjectslist=data,
      err=>console.log(err)
    )

  }
  typeselection(Course){
    this.selectedcoursetype=new Coursetype(this.subject,this.subsubject,Course)
this.studentservice.coursetype(this.selectedcoursetype).subscribe(
  data=>this.subjectslist=data,
  error=>console.log("error",error)
)
  }
  gettodayclasses(){
    this.notfilter=false
this.studentservice.todayclasses().subscribe(
  data=>this.subjectslist=data,
  err=>console.log(err)
)
>>>>>>> 280aeba32f85154f2e0830e77de87b8c300dba5a
  }
};




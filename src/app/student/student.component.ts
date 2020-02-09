import { Component, OnInit } from '@angular/core';
import{StudentsService} from'../students.service';
import { from } from 'rxjs';
import{Tutor} from '../tutor';
import{Subsubject} from '../subsubject'
import{Filter} from'../filter'
import { error } from 'protractor';
import{Coursetype} from'../coursetype'
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  subjectslist:Tutor[]
  public searchText
public display=false
public selectedcouse=[]
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
    // to get all subjects list
studentservice.allsubjects().subscribe(
  data=>{console.log("data"+data);this.allsubjects=data},
  error=>console.log(error)
)
// to get all details
    studentservice.subjectslist()
    .subscribe(
      data=>{console.log("check",data),this.subjectslist=data},
      error=>console.log(error)
    )
    
    
   }

  ngOnInit() {
  }
 
  subjectselected(i){
// this.selectedcouse.push(a1)
// this.selectedcouse.push(a2)
// this.selectedcouse.push(a3)
// this.selectedcouse.push(a4)
// this.selectedcouse.push(a5)
// this.selectedcouse.push(a6)
// this.selectedcouse.push(a7)
// this.selectedcouse.push(a8)
// this.selectedcouse.push(a9)
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
this.studentservice.todayclasses().subscribe(
  data=>console.log(data),
  err=>console.log(err)
)
  }
}




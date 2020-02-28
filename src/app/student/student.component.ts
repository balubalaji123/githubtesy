import { Component, OnInit } from '@angular/core';
import{StudentsService} from'../students.service';
import { from } from 'rxjs';
import{Tutor} from '../tutor';
import{Subsubject} from '../subsubject'
import{Filter} from'../filter'
import { error } from 'protractor';
import{Coursetype} from'../coursetype'
import { Router, RouterModule } from '@angular/router';
import { ChecksessionService } from '../checksession.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  subjectslist:Tutor[]
  public searchText;
  public filter1='course type filter';
public filter2='Subject';
public filter3='Subsubject';
public display=false
public notfilter=true
public subject
public todayclasseslist:Tutor[]
public Courses=['Academic Course','Competitive Course', 'Art Course','Technical Course'];

public filterdata:Filter
public subsubject
public allsubjects=[]
public selectedcoursetype:Coursetype
public subsubjects=[]
public subjectoption:Subsubject
public filter:Filter
public oops=false
public selectedsubject:string
  constructor(private studentservice:StudentsService,public router:Router,private chechsession:ChecksessionService) {
    // to get all subjects list
studentservice.allsubjects().subscribe(
  data=>{this.allsubjects=data},
  error=>console.log(error)
)
// to get all details
    studentservice.subjectslist()
    .subscribe(
      data=>{if(data.length==0){
this.oops=true
      }
      else{
      this.subjectslist=data}},
      error=>console.log(error)
    )
    this.chechsession.verifysession().subscribe(
      data=>{if(!data){
        this.router.navigate(['/login1'])
      }}
    )    
   }

  ngOnInit() {
  }
 
  subjectselected(i){
this.oops=false
this.display=true
this.router.navigate(['/courseselected',this.subjectslist[i]])
  }

  subjectselection(subject){
    this.filter1=''
    this.filter2=subject;
    this.oops=false
    this.subject=subject
    this.subjectoption=new Subsubject(subject)
    this.studentservice.allsubsubjects(this.subjectoption).subscribe(
      data=>this.subsubjects=data,
      err=>console.log(err)
    )
    
  }
  subsubjectselection(subject){
    this.filter1=''
    this.filter3=subject;
    this.oops=false
    this.subsubject=subject
    this.filterdata=new Filter(this.subject,this.subsubject)
    this.studentservice.filterdata(this.filterdata).subscribe(
      data=>this.subjectslist=data,
      err=>console.log(err)
    )

  }
  typeselection(Course){
    this.filter1=Course
    this.oops=false
    this.selectedcoursetype=new Coursetype(this.subject,this.subsubject,Course)
this.studentservice.coursetype(this.selectedcoursetype).subscribe(
  data=>{if(!data.length){
    this.oops=true
    this.subjectslist=[]
          }
          else{
          this.subjectslist=data}},
  error=>console.log("error",error)
)
  }
  gettodayclasses(){
    this.oops=false
    this.notfilter=false
this.studentservice.todayclasses().subscribe(
  data=>{if(!data.length){
    this.oops=true
    this.subjectslist=[]
          }
          else{
          this.subjectslist=data}},
  err=>console.log(err)
)
  }
}





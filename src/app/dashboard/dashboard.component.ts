import { Component, OnInit } from '@angular/core';
import{DashboardService} from'../dashboard.service'
import { ERROR_COMPONENT_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboard:DashboardService) {
    this.dashboard.subjectselection()
    .subscribe(
      data=>{this.data1=data,console.log("dashboard component"+JSON.stringify(data))}
      
      )
      this.dashboard.learntselection()
      .subscribe(
        data=>this.courseslearningdata=data
      )
      this.a=false
      this.b=false
      this.c=true
      this.d=false
      this.e=false
   }
   public a;
public c;
public b;
public d;
public e;
 
public class=[
  {"name":"Bhavya","time":"3 PM","days":"Monday","Course":"Python","Fees":"0"},
  {"name":"Hitesh","time":"4 PM","days":"saturday","Course":"Java","Fees":"30$"},
  {"name":"Vishwas","time":"5 PM","days":"Every day","Course":"Chemistry","Fees":"20$"},
  {"name":"Sneha","time":"2 PM","days":"Sunday","Course":"Linux","Fees":"40$"},
  {"name":"Tulasi","time":"3:30 PM","days":"Saturday","Course":"Data Structures","Fees":"30$"},
  {"name":"Vikram","time":"5:30 PM","days":"Sunday","Course":"ADC","Fees":"60$"}
]
public subjectsteached1=false
public data1:any
public mailid='balajipuvvada12289@gmail.com'
public subject=new Array()
public Crashcourse=new Array()
public Competative=new Array()
public coursesteaching=new Array()
public courseslearningdata:any
public courses=new Array() //for learning courses
  ngOnInit() {
  }
  onclick3()
  {
    this.a=false
    this.b=false
    this.c=true
    this.d=false
    this.e=false
  }
  onclick1()
  {
    this.a=false
    this.b=false
    this.c=false
    this.d=true
    this.e=false
  }
  onsubmits()
  { this.c=false
      this.b=true
      this.a=false
   
    this.d=false
    this.e=false
  }
  subjectsteached(){
    this.subject=[]
    this.Crashcourse=[]
    this.Competative=[]
    this.coursesteaching=[]
    this.subjectsteached1=true
        for (let index = 0; index <Object.keys(this.data1).length; index++) {
          console.log("entered")
          const element = this.data1[index]['tutormail'];
          console.log("type  "+typeof(this.mailid))
          const sub=this.data1[index]['tutorsubject']
          if(element===this.mailid){
          this.subject.push(sub)
          console.log("response from server    "+this.subject[0])
          if(this.data1[index]['tutorcoursetype']==="Crash"){
          this.Crashcourse.push(this.data1[index]['tutorsubject'])
          
        }
          if(this.data1[index]['tutorcoursetype']==="Competative")
          this.Competative.push(this.data1[index]['tutorsubject'])
          this.coursesteaching.push(this.data1[index]['tutorsubject'])       
        }}
 
    }
    learntselection(){
      this.courses=[]
      for (let index = 0; index <Object.keys(this.courseslearningdata).length; index++){
        const element = this.courseslearningdata[index]['learnermail'];
        
        if(element===this.mailid){
          console.log(element)
          this.courses.push(this.courseslearningdata[index]['leanersubject'])
        }
      }
        this.a=false
        this.b=false
        this.c=false
        this.e=true
        this.d=false 
    }
  }
  


  





import { Component, OnInit, ɵisListLikeIterable } from '@angular/core';
import{DashboardService} from'../dashboard.service'
import { ERROR_COMPONENT_TYPE } from '@angular/compiler';
import{LikeService}from'../like.service'
import{Like}from'../like'
import { from } from 'rxjs';
import { error } from 'protractor';
import{Delete}  from'../delete'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ngOnInit() {
  }
  public asastudent
  public deletemode:Delete
  public asatutor
  public liking:Like
  public liking1:Like
  public disliked:Like
public dislike:boolean
  constructor(private dashboard:DashboardService,public Like:LikeService) {}
  classesattended1(){
    this.dashboard.subjectselection()
    .subscribe(
      data=>{console.log(data),this.asatutor=data},
      error=>console.log("error in dashboard")
    )
  }
  dislikedf(learnername,leanersubject,learnertime,date,likecheck,tutormail,learnermail){
    this.liking1=new Like(learnername,leanersubject,learnertime,date,likecheck,tutormail,learnermail)
this.Like.dislike(this.liking1)
.subscribe(
  data=>console.log(data),
  error=>console.log("error from dislike")
)
this.dashboard.learntselection()
.subscribe(
  data=>{console.log(data),this.asastudent=data},
  error=>console.log("error in dashboard")
)

  }
  classesenrolled1(){
    this.student=!this.student
    this.dashboard.learntselection()
    .subscribe(
      data=>{console.log(data),this.asastudent=data,this.dislike=data.like},
      error=>console.log("error in dashboard")
    )
    
  }
  like(learnername,leanersubject,learnertime,date,likecheck,tutormail,learnermail){
this.liking=new Like(learnername,leanersubject,learnertime,date,likecheck,tutormail,learnermail)
this.dislike=false
this.Like.like(this.liking)
.subscribe(
  data=>console.log(data),
  error=>console.log("error from like"+error)
)
    this.dashboard.learntselection()
    .subscribe(
      data=>{console.log(data),this.asastudent=data},
      error=>console.log("error in dashboard")
    )

  }
  delete(tutorsubject,cousetype){
this.deletemode=new Delete(tutorsubject,cousetype)
this.Like.delete(this.deletemode).
subscribe(
  data=>console.log("data from delete"),
  error=>console.log("error")
)
  }
  public techer=true
  public student=false
}



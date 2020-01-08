import { Component, OnInit, ɵisListLikeIterable } from '@angular/core';
import{DashboardService} from'../dashboard.service'
import { ERROR_COMPONENT_TYPE } from '@angular/compiler';
import{LikeService}from'../like.service'
import{Like}from'../like'
import { from } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ngOnInit() {
  }
  public asastudent
  public liking:Like

  constructor(private dashboard:DashboardService,public Like:LikeService) {}
  classesattended1(){
    this.dashboard.subjectselection()
    .subscribe(
      data=>console.log(data),
      error=>console.log("error in dashboard")
    )
  }
  classesenrolled1(){
    this.dashboard.learntselection()
    .subscribe(
      data=>{console.log(data),this.asastudent=data},
      error=>console.log("error in dashboard")
    )
  }
  like(learnername,leanersubject,learnertime,date,likecheck,tutormail){
this.liking=new Like(learnername,leanersubject,learnertime,date,likecheck,tutormail)
this.Like.like(this.liking)
.subscribe(
  data=>console.log(data),
  error=>console.log("error from like"+error)
)
  }
}


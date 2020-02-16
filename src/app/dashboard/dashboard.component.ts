import { Component, OnInit, ɵisListLikeIterable } from '@angular/core';
import{DashboardService} from'../dashboard.service'
import { ERROR_COMPONENT_TYPE } from '@angular/compiler';
import{LikeService}from'../like.service'
import{Like}from'../like'
import { from } from 'rxjs';
import { error } from 'protractor';
import{Delete}  from'../delete';
import{LogoutService} from'../logout.service';
import { Router, RouterModule } from '@angular/router';
import { SessioncheckService } from '../sessioncheck.service';
import { ChecksessionService } from '../checksession.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(public sessionservice:SessioncheckService,private dashboard:DashboardService,public Like:LikeService,public logoutservice:LogoutService,public route:Router,private chechsession:ChecksessionService) {
    // for fast filling classes
    this.dashboard.getfastfilling().subscribe(
      data=>this.immediatecourse=data,
      error=>console.log(error)
    )
    // for username
    this.chechsession.getusername().subscribe(
      data=>console.log('username',data),
      error=>console.log(error)
    )
    this.chechsession.verifysession().subscribe(
      data=>{if(!data){
        this.route.navigate(['/login1'])
      }}
    )



    // for most liked
    this.dashboard.highliked().subscribe(
      data=>this.mostliked=data,
      error=>console.log(error)
    )
    // for image
    sessionservice.sessioncheck().subscribe(
      data=>{this.username=data},
            error=>console.log(error)
    )
    // for profile image
    dashboard.profiledata().subscribe(
      data=>this.user=data,
      error=>console.log(error)
    )
   
  }
  ngOnInit() {
  }
  logout(){
    this.logoutservice.logout()
    .subscribe(
      data=>{},
      error=>console.log(error)
    )
    this.route.navigate([''])

  }
  public profile=false
  public mostliked
  public hasError=true;
  public a=false;
  public user
  public b=false;
  public asastudent
  public deletemode:Delete
  public asatutor
  public liking:Like
  public liking1:Like
  public username
  public show
  public showbutton=true
  public disliked:Like
  public immediatecourse
  public showimmediatecourses=true
public dislike:boolean
  forprofile(){
    this.profile=true
this.showbutton=false
this.showimmediatecourses=false
this.show=false
this.b=false;
this.a=false;



  }

  classesattended1(){
    this.showbutton=true
    this.profile=false
    this.showimmediatecourses=false
    this.show=true
    this.asastudent=[]
    this.b=true;
    this.dashboard.subjectselection()
    .subscribe(
      data=>{this.asatutor=data},
      error=>console.log("error in dashboard")
    )
  }
  dislikedf(learnername,leanersubject,learnertime,date,likecheck,tutormail,learnermail,time){
    this.showbutton=true
    this.liking1=new Like(learnername,leanersubject,learnertime,date,likecheck,tutormail,learnermail,time)
this.Like.dislike(this.liking1)
.subscribe(
  data=>{},
  error=>console.log("error from dislike")
)
this.dashboard.learntselection()
.subscribe(
  data=>{this.asastudent=data},
  error=>console.log("error in dashboard")
)

  }
  classesenrolled1(){
    this.profile=false;
    this.showbutton=true
    this.show=false
    this.showimmediatecourses=false
    this.asatutor=[]
    this.student=!this.student
    this.a=true;
    this.dashboard.learntselection()
    .subscribe(
      data=>{this.asastudent=data,this.dislike=data.like},
      error=>console.log("error in dashboard")
    )
    
  }
  like(learnername,leanersubject,learnertime,date,likecheck,tutormail,learnermail,time){
    this.showbutton=true
this.liking=new Like(learnername,leanersubject,learnertime,date,likecheck,tutormail,learnermail,time)
this.dislike=false
this.Like.like(this.liking)
.subscribe(
  data=>{},
  error=>console.log("error from like"+error)
)
    this.dashboard.learntselection()
    .subscribe(
      data=>{this.asastudent=data},
      error=>console.log("error in dashboard")
    )
  }
  delete(tutorsubject,cousetype,likes,tutorsubsubject){
this.deletemode=new Delete(tutorsubject,cousetype,likes,tutorsubsubject)
this.Like.delete(this.deletemode).
subscribe(
  data=>{this.asatutor=data},
  error=>console.log("error")
)
  }
  public sele=true;
  public techer=true

  public student=false
  onlyonce(){
    this.asatutor=[]
    this.showbutton=false
    this.dashboard.temptutor().subscribe(
      data=>{this.asatutor=data},
      error=>console.log(error)
    )

  }
  multiple(){
    this.showbutton=true
    this.asatutor=[]
    this.dashboard.permenattutor().subscribe(
      data=>this.asatutor=data,
      error=>console.log(error)
    )
  }
selection()
{
  this.sele=true;
  // console.log(this.sele);
}
selection1()
{
  this.sele=false;
  // console.log(this.sele);
}
}


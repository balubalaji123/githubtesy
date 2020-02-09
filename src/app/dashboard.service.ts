import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http'
import { timingSafeEqual } from 'crypto';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private url='/dashboard'
  private url1 ='/dashboard/learnt'
  private profileurl='/dashboard/profileurl'
  private fastfillurl='/dashboard/fastfilling'
private mostlikedurl='/dashboard/mostliked'
private onceselection='/dashboard/once'
private multipleselection='/dashboard/multiple'
  constructor(private http:HttpClient) {}
  // dashboard as a teacher
  subjectselection(){
    return this.http.get<any>(this.url)
  }
  // dashboard as a student
  learntselection(){
    return this.http.get<any>(this.url1)
  } 
  // for profile
  profiledata(){
    return this.http.get<any>(this.profileurl)
  }
  getfastfilling(){
    return this.http.get<any>(this.fastfillurl)
  }

  highliked(){
    return this.http.get<any>(this.mostlikedurl)
  }
  temptutor(){
    return this.http.get<any>(this.onceselection)
  }
  permenattutor(){
    return this.http.get<any>(this.multipleselection)
  }
}

import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { from } from 'rxjs';
import { Subsubject } from './subsubject';
import { Filter } from './filter';
import { Coursetype } from './coursetype';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
public url='/student'
public url1='/student/subjects'
public ull2='/student/subsubjects'
public url3='/student/filter'
// filter for coursetype
public url4='/student/coursetype'
  constructor(private http:HttpClient) { }
  subjectslist(){
return this.http.get<any>(this.url)
  }
  allsubjects(){
    return this.http.get<any>(this.url1)
  }
  allsubsubjects(data:Subsubject){
    console.log("servie"+JSON.stringify(data))
    return this.http.post<any>(this.ull2,data)
  }
  filterdata(data:Filter){
    return this.http.post<any>(this.url3,data)
  }
  // for apply filters on coursetype
  coursetype(data:Coursetype){
    console.log("ser",data)
    return this.http.post<any>(this.url4,data)
  }

}

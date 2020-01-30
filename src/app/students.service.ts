import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {
public url='/student'
public url1='/tutor/sujects'
public ull2='/tutor/subsubjects'
  constructor(private http:HttpClient) { }
  subjectslist(){
return this.http.get<any>(this.url)
  }
  allsubjects(){
    return this.http.get<any>(this.url1)
  }
  allsubsubjects(){
    return this.http.get<any>(this.ull2)
  }
}

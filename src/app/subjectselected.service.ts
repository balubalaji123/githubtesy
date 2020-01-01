import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http'
import{Courseselected} from'./courseselected'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SubjectselectedService {
private url='http://localhost:3000/subjectselected'
  constructor(private http:HttpClient) { }
  subjectselected(list:Courseselected){
    let headers=new Headers({'Content-Type':'application/json'})
      return this.http.post<any>(this.url,list)
  }
}



// private url='/register'
//   constructor(private http:HttpClient) { }
// register(details:Register){
//   let headers=new Headers({'Content-Type':'application/json'})
//   return this.http.post<any>(this.url,details)
// }
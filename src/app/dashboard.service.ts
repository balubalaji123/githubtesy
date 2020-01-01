import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private url='http://localhost:3000/dashboard'
  private url1 ='http://localhost:3000/dashboard/learnt'

  constructor(private http:HttpClient) { }
  subjectselection(){
    return this.http.get<any>(this.url)
  }
  learntselection(){
    return this.http.get<any>(this.url1)
  }

}

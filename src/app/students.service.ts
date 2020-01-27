import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {
public url='/student'
  constructor(private http:HttpClient) { }
  subjectslist(){
return this.http.get<any>(this.url)
  }
}

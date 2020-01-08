import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SessioncheckService {
public url='/session'
  constructor(private http:HttpClient) { }
  sessioncheck(){
    return this.http.get<any>(this.url)
   }}
   const httpOptions = {
     headers: new HttpHeaders({
       'Content-Type':  'application/json',
       'Authorization': 'my-auth-token'
     })
   };
 


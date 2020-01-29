import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http'
import {Googlepassword} from './googlepassword';
@Injectable({
  providedIn: 'root'
})
export class GoogleloginService {
  private url='/register/google'
  constructor(private http:HttpClient) { }
  googlelogin(details:Googlepassword){
    return this.http.post<any>(this.url,JSON.stringify(details),httpOptions)

  }
}
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
}
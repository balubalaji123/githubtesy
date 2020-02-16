import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ChecksessionService {
public url='checksession'
public url1='username'
  constructor(private http:HttpClient) { }
  verifysession(){
return    this.http.get<any>(this.url)
  }
  // for user name
  getusername(){
    return this.http.get<any>(this.url1)
  }
}

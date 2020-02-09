import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http'
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordService {

  constructor(private http:HttpClient) { }
  private url='/password'
  private url1='/password/otp'
  private url2='/password/update'
  checkemail(data){
    return this.http.post<any>(this.url,data)
  }
  checkotp(data){
    return this.http.post<any>(this.url1,data)
  }
  updatepassword(data){
    return this.http.post<any>(this.url2,data)
  }
}

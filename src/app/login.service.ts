import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http'
import{Login} from './login'
@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private url='/login'
 
  
  constructor(private http:HttpClient) { }
login(details:Login){

  return this.http.post<any>(this.url,JSON.stringify(details),httpOptions)
}
}
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

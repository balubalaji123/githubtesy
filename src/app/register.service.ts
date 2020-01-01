import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { from } from 'rxjs';
// import {Register} from '../register'
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private url='http://localhost:3000/register'
  constructor(private http:HttpClient) { }
register(details:Register){
  let headers=new Headers({'Content-Type':'application/json'})
  return this.http.post<any>(this.url,details)
}
}

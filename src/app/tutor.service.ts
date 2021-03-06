import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import{Tutor}from'./tutor'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TutorService {
private url='/tutor'
private imageurl='/tutor/image'

  constructor(private http:HttpClient) { }
  tutor(details:Tutor){
    let headers=new Headers({'Content-Type':'application/json'})
  return this.http.post<any>(this.url,details)

  }
  image(image){
    return this.http.post<any>(this.imageurl,image)
  }
}







// import { Injectable } from '@angular/core';
// import{HttpClient} from '@angular/common/http'
// import { from } from 'rxjs';
// // import {Register} from '../register'
// import { Register } from './register';

// @Injectable({
//   providedIn: 'root'
// })
// export class RegisterService {
// private url='/register'
//   constructor(private http:HttpClient) { }
// register(details:Register){
//   let headers=new Headers({'Content-Type':'application/json'})
//   return this.http.post<any>(this.url,details)
// }
// }

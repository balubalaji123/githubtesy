import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ChecksessionService {
public url='checksession'
  constructor(private http:HttpClient) { }
  verifysession(){
return    this.http.get<any>(this.url)

  }
}

import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http'
import{Like} from './like'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LikeService {
  private url='http://localhost:3000/like'
private url1='/dislike'
  constructor(private http:HttpClient) { }
  like(liked:Like){
    return this.http.post<any>(this.url,JSON.stringify(liked),httpOptions)
  }
  dislike(disliked:Like){
    return this.http.post<any>(this.url1,JSON.stringify(disliked),httpOptions)

  }
}
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};


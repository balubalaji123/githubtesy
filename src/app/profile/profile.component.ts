import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../dashboard.service'
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(dashboard:DashboardService,private http: HttpClient,public router:Router) {
dashboard.profiledata().subscribe(
  data=>this.profile=data,
  error=>console.log(error)
)
   }

  ngOnInit() {
  }
  public profile
  public images
  public check
  public uri='/profileupdate'
  public imageUrl = '../../assets/default.jpg';

  selectimage(event){
    if(event.target.files.length>0){
      const file=event.target.files[0]
  this.images=file
  var reader = new FileReader();
  reader.onload = (event : any) => {
    this.imageUrl = event.target.result;

  }
  reader.readAsDataURL(file);

    }
  }
  onimage(a){
    const formdata=new FormData()
    formdata.append('file',this.images)
    formdata.append('usermail',a)
    this.http.post<any>(this.uri,formdata).subscribe(
      data=>{this.check=data;
      if(this.check=='ok'){
        this.router.navigate(['/dashboard1'])}},
      error=>console.log(error)
    )
  }
  

}

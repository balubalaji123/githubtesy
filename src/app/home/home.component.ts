import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public notselected=false
public studentcheck=false
public tutorcheck=false
  constructor(public route:Router) { }

  ngOnInit() {
  }
student(){
  this.notselected=true
  this.studentcheck=true
}
tutor(){
  this.notselected=true
  this.tutorcheck=true
}
dashboard(){
  this.route.navigate(['/dashboard'])
}
}

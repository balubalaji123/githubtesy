import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ChecksessionService } from '../checksession.service';

@Component({
  selector: 'app-congrats',
  templateUrl: './congrats.component.html',
  styleUrls: ['./congrats.component.css']
})
export class CongratsComponent implements OnInit {

  constructor(public router:Router,private chechsession:ChecksessionService) { 
    this.chechsession.verifysession().subscribe(
      data=>{if(!data){
        this.router.navigate(['/login1'])
      }}
    )
  }

  ngOnInit() {
  }

}

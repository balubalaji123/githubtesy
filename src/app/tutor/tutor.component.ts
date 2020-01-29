
import { Component, OnInit } from '@angular/core';
import{Tutor} from '../tutor'
import { from } from 'rxjs';
import{TutorService} from '../tutor.service'
import { HttpClient } from '@angular/common/http';
import { error } from 'protractor';
@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css']
})
export class TutorComponent implements OnInit {
  Courses=['Crash','Competative'];
  selectedfile:File=null
days1=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday','EveryDay'];
fees=['fee','no fee'];
topicHasError =true;
imageUrl = '/assets/images/icontutorials41.jpg';
public a=false;
public b=false;
public tutor1=new Tutor('','','',{},'',0,'','','')
  constructor(private tutorservic:TutorService,private http: HttpClient) {

   }
public aftersubmission=false
  ngOnInit() {
  }
onsubmit(){
  console.log(this.tutor1)
  this.aftersubmission=true
  this.tutorservic.tutor(this.tutor1)
  .subscribe(
    data=>console.log("tutor"+data),
    error=>console.log(error)
  )
}  
updateCheckedOptions(option, event) {
  this.tutor1.days[option] = event.target.checked;
  
}
imageupload(event){
this.selectedfile=<File>event.target.files[0]
}
upload(){
  const fd=new FormData()
  fd.append('image',this.selectedfile,this.selectedfile.name)
  this.tutorservic.image(fd).subscribe(
    data=>console.log(data),
    error=>console.log("error"+error)
  )
}
single(){
this.a=true;
this.b=false;
}
multiple(){
  this.b=true;
  this.a=false;
}
}







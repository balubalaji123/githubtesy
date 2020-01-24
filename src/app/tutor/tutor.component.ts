import { Component, OnInit } from '@angular/core';
import{Tutor} from '../tutor'
import { from } from 'rxjs';
import{TutorService} from '../tutor.service'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css']
})
export class TutorComponent implements OnInit {
  Courses=['Crash','Competative'];
days1=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday','EveryDay'];
fees=['fee','no fee'];
topicHasError =true;
imageUrl = '/assets/images/icontutorials41.jpg';
   fileToUpload: File = null;
public tutor1=new Tutor('', '', '', '', {}, '', 0, '', '')
  constructor(private tutorservic:TutorService,private http: HttpClient) { }
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
handleFileInput(file: FileList) {
  this.fileToUpload = file.item(0);
   console.log(file);
}
onUpload() {
const fd = new FormData();
fd.append('image',this.fileToUpload, this.fileToUpload.name);
this.http.post('',fd);
//  .subscribe(res => {
//        console.log(res)
//  });
}
updateCheckedOptions(option, event) {
  this.tutor1.days[option] = event.target.checked;
  console.log(typeof this.tutor1.days);
}
}

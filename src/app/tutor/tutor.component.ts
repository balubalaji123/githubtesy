import { Component, OnInit } from '@angular/core';
import{Tutor} from '../tutor'
import { from } from 'rxjs';
import{TutorService} from '../tutor.service'
import { HttpClient } from '@angular/common/http';
import { error } from 'protractor';
import{FileSelectDirective,FileUploader} from 'ng2-file-upload';
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
public a=false;
public images
public rand
public imageurl="../../assets/TeacherStudent.jpg"
public filetoupload:File=null
public b=false;
 public result: string 
public uri='http://localhost:3000/tutor/upload'
public uploader:FileUploader=new FileUploader({url:this.uri})
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

single(){
this.a=true;
this.b=false;
}
multiple(){
  this.b=true;
  this.a=false;
}
selectimage(event){
  if(event.target.files.length>0){
    const file=event.target.files[0]
this.images=file
this.imageUrl=file
  }
  
}
makeString(): string {
  let outString: string = '';
  let inOptions: string = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < 26; i++) {

    outString += inOptions.charAt(Math.floor(Math.random() * inOptions.length));

  }

  return outString;
}



onimage(){
  this.result= this.makeString();
    const formdata=new FormData()
    formdata.append('file',this.images)
    formdata.append('rand',this.result)
    this.http.post<any>(this.uri,formdata).subscribe(
      data=>console.log(data),
      error=>console.log(error)
    )
}
}






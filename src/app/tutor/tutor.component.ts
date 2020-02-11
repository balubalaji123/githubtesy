
import { Component, OnInit } from '@angular/core';
import{Tutor} from '../tutor'
import { from } from 'rxjs';
import{TutorService} from '../tutor.service'
import { HttpClient } from '@angular/common/http';
import { error } from 'protractor';
import{FileSelectDirective,FileUploader} from 'ng2-file-upload';
import { Router, RouterModule } from '@angular/router';

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
public imageUrl = '../../assets/TeacherStudent.jpg';
public once=false
public continousteacher=false
public a=false;
public images
public rand
public imageurl="../../assets/TeacherStudent.jpg"
public filetoupload:File=null
public b=false;
<<<<<<< HEAD
public tutor1=new Tutor('xsc', 'fds', 'fdgfd', {}, 'gfd', 0, 'sgdg', 'fsdg', 'setr')
  constructor(private tutorservic:TutorService,private http: HttpClient) {
=======
 public result: string 
public uri='http://localhost:3000/tutor/upload'
public uploader:FileUploader=new FileUploader({url:this.uri})
public tutor1=new Tutor('','','','',{},'',10,0,'','','')
  constructor(private tutorservic:TutorService,private http: HttpClient,public router:Router) {
>>>>>>> 280aeba32f85154f2e0830e77de87b8c300dba5a

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
this.router.navigate(['/congrats'])
}  
updateCheckedOptions(option, event) {
  this.tutor1.days[option] = event.target.checked;
  
}
onlyonce(){
  this.once=true
  this.continousteacher=false
}
<<<<<<< HEAD
upload(){
  const fd=new FormData()
  fd.append('image',this.selectedfile,this.selectedfile.name)
  this.tutorservic.image(fd).subscribe(
    data => console.log(data),
    error => console.log("error"+error)
  )
=======
continous(){
  this.once=false
  this.continousteacher=true
>>>>>>> 280aeba32f85154f2e0830e77de87b8c300dba5a
}
single(){
this.a = true;
this.b = false;
}
multiple(){
  this.b = true;
  this.a = false;
}
selectimage(event){
  if(event.target.files.length>0){
    const file=event.target.files[0]
this.images=file
this.imageUrl=event.target.result
console.log(this.imageUrl)
  }
}
onimage(){
    const formdata=new FormData()
    formdata.append('file',this.images)
    this.http.post<any>(this.uri,formdata).subscribe(
      data=>console.log(data),
      error=>console.log(error)
    )
}
}







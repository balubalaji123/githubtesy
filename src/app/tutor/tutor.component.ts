import { Component, OnInit } from '@angular/core';
import{Tutor} from '../tutor'
import { from } from 'rxjs';
import{TutorService} from '../tutor.service'
import { HttpClient } from '@angular/common/http';
import { error } from 'protractor';
import{FileSelectDirective,FileUploader} from 'ng2-file-upload';
import { Router, RouterModule } from '@angular/router';
import { ChecksessionService} from'../checksession.service'
@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css']
})
export class TutorComponent implements OnInit {
  Courses=['Academic Course','Competitive Course', 'Art Course','Technical Course'];
days1=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday','EveryDay'];
fees=['fee','no fee'];
topicHasError =true;

public imageUrl = '../../assets/TeacherStudent.jpg';
public once=false
public continousteacher=false
public a=false;
public images
public rand;
public button1=true;
public c;
public daysselection=true;
public single1=false;
public multiple1=false;
// public imageurl="../../assets/TeacherStudent.jpg"
public filetoupload:File=null
public b=false;

 public result: string 
public uri='http://localhost:3000/tutor/upload'
public uploader:FileUploader=new FileUploader({url:this.uri})
public tutor1=new Tutor('','','','',{},'', 10,0,'','','')
  constructor(private tutorservic:TutorService,private http: HttpClient,public router:Router,private chechsession:ChecksessionService) {
this.chechsession.verifysession().subscribe(
  data =>{if(!data){
    this.router.navigate(['/login1'])
  }}
)
   }
public aftersubmission=false
  ngOnInit() {
  }
  // onKeypress($event){
  //   console.log(event);
  // }
onsubmit(){
  this.aftersubmission=true
  this.tutorservic.tutor(this.tutor1)
  .subscribe(
    data=>{},
    error=>console.log(error)
  )
this.router.navigate(['/congrats'])
}  
updateCheckedOptions(option, event) {
  // console.log('.....',option)
  // if(option=='Everyday')
  // {dust krish
  //   for(let i=0;i<7;i++)
  //   {this.tutor1.days[this.days1.indexOf(option)] = event.target.checked;  console.log(this.tutor1.days[i])
  //   }
  // }
  this.tutor1.days[option] = event.target.checked;
  console.log("proved",this.tutor1)
  
}

onlyonce(){
  this.once=true
  this.continousteacher=false
  this.button1=false;
  this.c=true;
}
continous(){
  this.once=false
  this.continousteacher=true
  this.button1=false;
  // this.c=false;
}
single(){
this.a=true;
this.b=false;
this.single1=true;
this.daysselection=false;
}
multiple(){
  this.b=true;
  this.a=false;
  this.multiple1=true;
  
this.daysselection=false;
}
}

// selectimage(event){
//   if(event.target.files.length>0){
//     const file=event.target.files[0]
// this.images=file
// this.imageUrl=event.target.result
// console.log(this.imageUrl)
//   }
// }
// onimage(){
//     const formdata=new FormData()
//     formdata.append('file',this.images)
//     this.http.post<any>(this.uri,formdata).subscribe(
//       data=>console.log(data),
//       error=>console.log(error)
//     )
// }
// }

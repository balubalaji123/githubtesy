import { Component, OnInit } from '@angular/core';
import{Tutor} from '../tutor';
import {InterfaceService} from '../interface.service';
import { from } from 'rxjs';
import{TutorService} from '../tutor.service'
import { HttpClient } from '@angular/common/http';
import { not } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css']
})
export class TutorComponent implements OnInit {
  Courses=['Crash', 'Competative'];
  days1 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
fees=['fee','no fee'];
topicHasError =true;
public i=1;
imageUrl = '/assets/images/icontutorials41.jpg';
   fileToUpload: File = null;
   public count = 0;
   public count1 =0;
   public a = false;
   public b = false;
   public check=0
   public day2 = false;
   public m = "Ds";
   public subject: any;
   public subtopic =[];
public tutor1 = new Tutor('', '', '', '',  '', {}, '', 0, '','');
  constructor(private tutorservic: TutorService, private http: HttpClient, private interface1: InterfaceService) {
    console.log("sdfd "+typeof(interface1.display));
    this.subject =interface1.display;
    console.log("subject  " + (this.subject.length))
   }
public aftersubmission = false;
  ngOnInit() {
  }
onsubmit(option:any) {
  this.check=1;
    console.log("subject  "+(this.subject.length))
    for(let i=0; i<this.subject.length; i++)
    {
      if(this.subject[i]==option)
      this.check=0;
    }
  if(this.check==1){
    console.log("fedfds");
    this.subject.push(option);
    this.interface1.display = this.subject;
  }

  console.log(this.days1.length);
  console.log( this.tutor1);
  this.aftersubmission = true;
  this.tutorservic.tutor(this.tutor1)
  .subscribe(
    data => console.log( "tutor" + data),
    error => console.log(error)
  )
}  
handleFileInput(file: FileList) {
  this.fileToUpload = file.item(0);
   console.log(file);
}
onUpload() {
const fd = new FormData();
fd.append('image', this.fileToUpload, this.fileToUpload.name);
this.http.post('', fd);
}
updateCheckedOptions(option, event) {
  this.tutor1.days[option] = event.target.checked;
  console.log(this.tutor1.days);
}

single(){
   this.a = true;
   this.b = false;
   this.count=this.count+1;
   if(this.count1==1)
   {
    var resetForm:HTMLFormElement;
    resetForm= <HTMLFormElement>document.getElementById('your form id');
    if(resetForm)
        resetForm.reset();
   }
   
}
multiple(){
  this.b = true;
  this.a = false;
  this.count1 = this.count1 + 1;
  if(this.count == 1)
  {
    var resetForm:HTMLFormElement;
    resetForm= <HTMLFormElement>document.getElementById('your form id');
    if(resetForm)
        resetForm.reset();
  }
}

}

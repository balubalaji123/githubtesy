import { EmailValidator } from '@angular/forms';

export class Courseselected {
    constructor(
       public name:string,
public subject:string,
public tutormail:string,
public subsubject:string,
public watsuplink:string,
public tutorimage:string,
public tutordate:string,
public classtime:string
        // public mail:string
    ){}
}
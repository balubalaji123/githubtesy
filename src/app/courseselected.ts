import { EmailValidator } from '@angular/forms';

export class Courseselected {
    constructor(
       public name:string,
public subject:string,
public time:number,
public coursetype:string,
// courseduration:number,
public fee:number,
public description:string,
public watsuplink:string,
public tutormail:string,
public subsubject:string
        // public mail:string
    ){}
}

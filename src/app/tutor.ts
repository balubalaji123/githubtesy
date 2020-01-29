
export class Tutor {
    constructor(
// public image:File,        
public subject:string,
public time:string,
public coursetype:string,
public days: Object=[{"mon":false,"tue":false,"wed":false,"thu":false,"fri":false,"sat":false,"sun":false,"every":false}],
// courseduration:number,
public date: string,
public fee:number,
public description:string,
public watsuplink:string,
public subsubject:string
 ){}
}


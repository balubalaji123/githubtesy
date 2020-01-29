export class Tutor {
    constructor(
public img: string,
public subject: string,
public subtopic: string,
// public day: string,
public time: string,
public coursetype: string,
public days: Object=[{"mon":false,"tue":false,"wed":false,"thu":false,"fri":false,"sat":false,"sun":false,"every":false}],
// courseduration:number,
public date: string,
public fee: number,
public description: string,
public watsuplink: string ,
) {}
}

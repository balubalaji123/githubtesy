import { EmailValidator } from '@angular/forms';

export class Like {
    constructor(
        public  learnername:string,
        public leanersubject:string,
        public learnertime:string,
        public learnerdate:string,
        public likecheck:boolean,
        public tutormail:string,
        public learnermail:string,
        public time:string
    ){}
}

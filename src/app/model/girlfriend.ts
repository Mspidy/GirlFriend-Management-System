import { GirlFriendGift } from "./gift";


export class GirlFriend{
    
    
    id:number;
    name: string;
    age: number;
    occupation:string;
    hobbies: string[];
    sleepTime: string;
    wakeupTime: string;
    rating:number;
    knownLanguages: string[];
    status:string;
    calling_number:number;
    whatsApp_number:number;
    instagramId:string;
    facebookId:string;
    gifts:GirlFriendGift[];
    color: number;
    

    constructor(id:number,name: string,occupation:string, age:number, hobbies: string[],sleepTime: string,wakeupTime: string,rating:number,knownLanguages: string[],status:string,calling_number:number,whatsApp_number:number,instagramId:string,facebookId:string){
        this.id=id;
        this.name=name;
        this.age=age;
        this.occupation=occupation;
        this.hobbies=hobbies;
        this.sleepTime=sleepTime;
        this.wakeupTime=wakeupTime;
        this.rating=rating;
        this.knownLanguages=knownLanguages;
        this.status=status;
        this.calling_number=calling_number;
        this.whatsApp_number=whatsApp_number;
        this.instagramId=instagramId;
        this.facebookId=facebookId;

    }
    
}
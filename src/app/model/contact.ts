export class Contact{
    calling_number:number;
    whatsApp_number:number;
    instagramId:string;
    facebookId:string;

    constructor(calling_number:number,whatsApp_number:number,instagramId:string,facebookId:string){
        this.calling_number=calling_number;
        this.whatsApp_number=whatsApp_number;
        this.instagramId=instagramId;
        this.facebookId=facebookId;
    }
}
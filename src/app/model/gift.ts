export class GirlFriendGift{
    add_gift:string;
    add_price:number;
    isRecover:boolean=false

    constructor(add_gift:string,add_price:number,isRecover:boolean){
        this.add_gift=add_gift;
        this.add_price=add_price;
        this.isRecover=isRecover;
    }
}
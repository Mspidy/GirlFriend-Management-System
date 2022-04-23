import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MatDialogModule } from '@angular/material/dialog';
import { GirlFriend } from './model/girlfriend';

import { Contact } from './model/contact';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Time } from '@angular/common';
import { GirlFriendGift } from './model/gift';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ind: number;
  title = 'mark9';
  c3 = "c3";
  cont: GirlFriend[];
  localItem: any;
  contacts: GirlFriend;
  rowIndex: number;
  date1: Time;
  date2: Time;
  editGirlFriends: GirlFriend;
  editGirl: Boolean;
  editIndex: number;
  c: GirlFriend;
  count: number;
  constructor(private messageService: MessageService, public dialog: MatDialogModule) { }
  Delete: any;
  displayModal!: boolean;
  displayContactModel!: boolean;
  displayContactGift!: boolean;
  displayContactModelGift!: boolean;
  displayContactShownGift!: boolean;
  displayRecoverGift!: boolean;

  showGift: GirlFriendGift[];
  giftForm = new FormGroup({
    add_gift: new FormControl('', [Validators.required]),
    add_price: new FormControl('', [Validators.required]),
  })
  loginGift() {

    this.displayContactModelGift = true;
    const gift = this.giftForm.value
    gift.isRecover = false;
    this.detailgirlfriend[this.ind].gifts.push(gift)
    this.giftForm.reset();
    this.displayContactModelGift = false;
  }

  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    occupation: new FormControl('', [Validators.required]),
    hobbies: new FormArray([new FormControl(null, Validators.required),]),
    sleepTime: new FormControl('', [Validators.required]),
    wakeupTime: new FormControl('', [Validators.required]),
    knownLanguages: new FormArray([new FormControl(null, Validators.required),]),
    calling_number: new FormControl('', [Validators.required]),
    whatsApp_number: new FormControl('', [Validators.required]),
    instagramId: new FormControl('', [Validators.required]),
    facebookId: new FormControl('', [Validators.required]),

  })
  get name() {
    return this.loginForm.get('name');
  }
  get age() {
    return this.loginForm.get('age');
  }
  get occupation() {
    return this.loginForm.get('occupation');
  }
  get sleepTime() {
    return this.loginForm.get('sleepTime');
  }
  get wakeupTime() {
    return this.loginForm.get('wakeupTime');
  }
  get calling_number() {
    return this.loginForm.get('calling_number');
  }
  get whatsApp_number() {
    return this.loginForm.get('whatsApp_number');
  }

  detailgirlfriend: GirlFriend[] = [];
  detailGirlFriendContact: Contact[] = [];
  deletedGirlFriend: GirlFriend[] = [];
  detailgirlfriendGift: GirlFriendGift[] = [];
  showGifts: GirlFriendGift[] = [];

  loginUser() {
    if (this.editGirl) {
      const girlfriend: GirlFriend = this.loginForm.value;
      girlfriend.gifts = this.detailgirlfriend[this.editIndex].gifts;
      this.detailgirlfriend[this.editIndex] = girlfriend;
      this.editGirl = false
    } else {
      const girlfriend: GirlFriend = this.loginForm.value;
      girlfriend.gifts = []
      console.log(this.loginForm.value);
      this.detailgirlfriend.push(girlfriend);
    }
    this.loginForm.reset();
    this.displayModal = false;
  }
  openNew() {
    this.displayModal = true;

  }
  deleteSelectedProducts() {
    console.log("Delete the product")
  }
  showModalDialog() {
    this.displayModal = true;
  }
  editGirlFriend(contact: GirlFriend, index: number) {
    this.displayModal = true;
    this.editGirlFriends = contact;
    this.editIndex = index;
    this.editGirl = true;
    this.loginForm.patchValue({
      name: contact.name,
      age: contact.age,
      occupation: contact.occupation,
      hobbies: contact.hobbies,
      sleepTime: contact.sleepTime,
      wakeupTime: contact.wakeupTime,
      knownLanguages: contact.knownLanguages,
      calling_number: contact.calling_number,
      whatsApp_number: contact.whatsApp_number,
      instagramId: contact.instagramId,
      facebookId: contact.facebookId,
    })
  }
  deleteGirlFriend(contacts: GirlFriend) {
    this.displayRecoverGift = true;
    this.c = contacts
  }
  priceValue: number
  nowDelete() {
    this.detailgirlfriend = this.detailgirlfriend.filter((value) => value.calling_number != this.c.calling_number);
    let recoveredAmount = 0;
    let totalAmount = 0;
    this.showGift.forEach(item => {
      if (item['isRecover']) {
        recoveredAmount = recoveredAmount + item.add_price;
        console.log(this.count);
      }
      totalAmount += item.add_price;
    });
    const percentage = (recoveredAmount / totalAmount) * 100;
    this.c.color = this.getColor(percentage);
    this.deletedGirlFriend.push(this.c);
  }

  getColor(percentage: number): number {
    if (percentage >= 85) return 1
    else if (percentage >= 65) return 2
    return 3;
  }
  getCssClass(contact: GirlFriend): string {
    if (contact.color == 1) {
      return "c1";
    }

    if (contact.color == 2) {
      return "c2";
    }
    return "c3";
  }
  newPopUpContact(contact: GirlFriend) {
    this.displayContactModel = true;
    this.cont = []
    this.cont.push(contact);
  }
  newPopUpGiftAdding(index: number) {
    this.displayContactModelGift = true;
    this.ind = index;
  }
  shownPopUpGift(gifts: GirlFriendGift[]) {
    this.displayContactShownGift = true;
    this.showGift = []
    this.showGift = gifts
  }

  addHobby() {
    (<FormArray>this.loginForm.get('hobbies')).push(new FormControl(null, Validators.required))
  }
  get hobbies() {
    return this.loginForm.get('hobbies') as FormArray;
  }
  addLanguages() {
    (<FormArray>this.loginForm.get('knownLanguages')).push(new FormControl(null, Validators.required))
  }
  get knownLanguages() {
    return this.loginForm.get('knownLanguages') as FormArray;
  }
  patchGirl: boolean;
  patchUp(loginForm: GirlFriend, indexx: number) {
    this.detailgirlfriend.push(loginForm);
    this.deletedGirlFriend.splice(indexx);
  }
}
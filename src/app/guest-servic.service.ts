import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuestServicService {

  constructor() { }

  myGuestFrom = []
  guestData = []

  addGuest(str) {
    this.myGuestFrom.push(str)
  }
  openGuest(data) {
    this.guestData.splice(0, 1);
    this.guestData.push(data);
  }

}

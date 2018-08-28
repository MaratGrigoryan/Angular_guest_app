import { Component, OnInit } from '@angular/core';
import { GuestServicService } from '../guest-servic.service'

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})
export class GuestListComponent implements OnInit {

  constructor(private guestServic: GuestServicService ) { }

  myGuestList = []

  ngOnInit() {
    this.myGuestList = this.guestServic.myGuestFrom
  }

  openGuest(obj) {
    this.guestServic.openGuest(obj);
  }
}

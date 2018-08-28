import { Component, OnInit } from '@angular/core';
import { GuestServicService } from '../guest-servic.service';

@Component({
  selector: 'app-guest-data',
  templateUrl: './guest-data.component.html',
  styleUrls: ['./guest-data.component.css']
})
export class GuestDataComponent implements OnInit {

  constructor(private guestServic: GuestServicService) { }

  ngOnInit(){
    this.myGuestData = this.guestServic.guestData
  }

  myGuestData = []

}


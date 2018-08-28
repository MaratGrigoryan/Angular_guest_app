import { Component } from '@angular/core';
import { GuestServicService } from '../guest-servic.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-guest-create',
  templateUrl: './guest-create.component.html',
  styleUrls: ['./guest-create.component.css']
})
export class GuestCreateComponent{

  constructor(private guestServic: GuestServicService) { }

  onSubmit(){
      this.guestServic.addGuest(this.guestForm.value);
  }

  guestForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    age: new FormControl('', [Validators.required, Validators.maxLength(3)]),
    relative: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    textarea: new FormControl('')
  });
}

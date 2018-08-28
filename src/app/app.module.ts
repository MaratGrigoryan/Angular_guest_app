import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatFormFieldModule, 
  MatInputModule, 
  MatToolbarModule, 
  MatSelectModule, 
  MatSliderModule, 
  MatSlideToggleModule,
  MatDividerModule,
  MatListModule,
  MatButtonModule,
  MatCardModule
} from '@angular/material';


import { AppComponent } from './app.component';
import { GuestCreateComponent } from './guest-create/guest-create.component';
import { GuestListComponent } from './guest-list/guest-list.component';
import { GuestDataComponent } from './guest-data/guest-data.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GuestServicService } from './guest-servic.service';

@NgModule({
  declarations: [
    AppComponent,
    GuestCreateComponent,
    GuestListComponent,
    GuestDataComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [GuestServicService],
  bootstrap: [AppComponent]
})
export class AppModule { }

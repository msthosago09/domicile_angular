import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ContactComponent} from './contact.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ContactComponent]
})
export class ContactModule { }

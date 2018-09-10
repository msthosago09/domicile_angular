import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AdminComponent} from './admin.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ServicesComponent} from './services.component';


@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ServicesComponent]
})
export class ServicesModule { }

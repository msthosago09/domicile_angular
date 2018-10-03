import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MediaComponent} from './media.component';

@NgModule({
  declarations: [
    MediaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MediaComponent]
})
export class MediaModule { }

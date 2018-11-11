import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ManageLinksComponent} from './manage-links.component';


@NgModule({
  declarations: [
    ManageLinksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ManageLinksComponent]
})
export class ManageLinksModule { }

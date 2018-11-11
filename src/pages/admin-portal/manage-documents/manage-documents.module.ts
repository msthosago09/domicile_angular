import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ManageDocumentsComponent} from './manage-documents.component';

@NgModule({
  declarations: [
    ManageDocumentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ManageDocumentsComponent]
})
export class ManageDocumentsModule { }

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ManageProjectsComponent} from './manage-projects.component';

@NgModule({
  declarations: [
    ManageProjectsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ManageProjectsComponent]
})
export class ManageProjectsModule { }

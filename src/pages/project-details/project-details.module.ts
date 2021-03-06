import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ProjectDetailsComponent} from './project-details.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ProjectDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ProjectDetailsComponent]
})
export class ProjectDetailsModule { }

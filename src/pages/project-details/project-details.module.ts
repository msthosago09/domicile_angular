import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ProjectDetailsComponent} from './project-details.component';

@NgModule({
  declarations: [
    ProjectDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ProjectDetailsComponent]
})
export class ProjectDetailsModule { }

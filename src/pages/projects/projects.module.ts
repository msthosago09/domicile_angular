import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ProjectsComponent} from './projects.component';
import {RouterModule} from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material';

@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [ProjectsComponent]
})
export class ProjectsModule { }

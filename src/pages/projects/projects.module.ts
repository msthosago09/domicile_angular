import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ProjectsComponent} from './projects.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [ProjectsComponent]
})
export class ProjectsModule { }

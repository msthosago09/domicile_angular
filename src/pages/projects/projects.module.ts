import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ProjectsComponent, ProjectsSpinnerComponent} from './projects.component';
import {RouterModule} from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material';
import {OverlayModule} from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectsSpinnerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    OverlayModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [ProjectsComponent],
  entryComponents: [ProjectsSpinnerComponent]
})
export class ProjectsModule { }

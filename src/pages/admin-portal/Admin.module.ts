import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AdminComponent} from './admin.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ProjectsComponent} from '../projects/projects.component';
import {HomeComponent} from '../home/home.component';
import {AboutComponent} from '../about-us/about.component';
import {ContactComponent} from '../contact-us/contact.component';
import {ServicesComponent} from '../services/services.component';
import {ProjectDetailsComponent} from '../project-details/project-details.component';
import {ManageLinksComponent} from './manage-links/manage-links.component';
import {ManageDocumentsComponent} from './manage-documents/manage-documents.component';
import {ManageProjectsComponent} from './manage-projects/manage-projects.component';
import {ManageLinksModule} from './manage-links/manage-links.module';
import {ManageDocumentsModule} from './manage-documents/manage-documents.module';
import {ManageProjectsModule} from './manage-projects/manage-projects.module';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ManageLinksModule,
    ManageDocumentsModule,
    ManageProjectsModule,
    RouterModule.forRoot([

      {
        path: 'manage-links',
        component: ManageLinksComponent,
      },
      {
        path: 'manage-projects',
        component: ManageProjectsComponent
      },
      {
        path: 'manage-docs',
        component: ManageDocumentsComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule { }

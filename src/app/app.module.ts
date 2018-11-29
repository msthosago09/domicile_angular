import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {ProjectsComponent} from '../pages/projects/projects.component';
import {ProjectsModule} from '../pages/projects/projects.module';
import {HomeComponent} from '../pages/home/home.component';
import {HomeModule} from '../pages/home/home.module';
import {ContactComponent} from '../pages/contact-us/contact.component';
import {ServicesComponent} from '../pages/services/services.component';
import {ContactModule} from '../pages/contact-us/contact.module';
import {ServicesModule} from '../pages/services/services.module';
import {HttpClientModule} from '@angular/common/http';
import {DbService} from '../providers/db.service';
import {AdminComponent} from '../pages/admin-portal/admin.component';
import {AdminModule} from '../pages/admin-portal/Admin.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AboutModule} from '../pages/about-us/about.module';
import {AboutComponent} from '../pages/about-us/about.component';
import {MediaModule} from '../pages/media/media.module';
import {ProjectDetailsModule} from '../pages/project-details/project-details.module';
import {ProjectDetailsComponent} from '../pages/project-details/project-details.component';
import {ManageLinksComponent} from '../pages/admin-portal/manage-links/manage-links.component';
import {ManageProjectsComponent} from '../pages/admin-portal/manage-projects/manage-projects.component';
import {ManageDocumentsComponent} from '../pages/admin-portal/manage-documents/manage-documents.component';
import {MediaComponent} from '../pages/media/media.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ProjectsModule,
    HomeModule,
    ContactModule,
    ServicesModule,
    AboutModule,
    AdminModule,
    MediaModule,
    BrowserAnimationsModule,
    ProjectDetailsModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'services',
        component: ServicesComponent
      },
      {
        path: 'media',
        component: MediaComponent
      },
      {
        path: 'admin',
        component: AdminComponent,
        children: [{
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
          }]
      },
      {
        path: 'project-details',
        component: ProjectDetailsComponent
      }
    ])
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

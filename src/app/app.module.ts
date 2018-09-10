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
    AdminModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: 'home',
        component: HomeComponent
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
        path: 'admin',
        component: AdminComponent
      }
    ])
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }

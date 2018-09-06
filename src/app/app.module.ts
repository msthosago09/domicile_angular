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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProjectsModule,
    HomeModule,
    ContactModule,
    ServicesModule,
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
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './Projects.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  constructor(private http: HttpClient) {}
}

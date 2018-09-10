import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DbService} from '../../providers/db.service';
import {Subscription} from 'rxjs';
import * as $ from 'jquery';

@Component({
  selector: 'app-projects',
  templateUrl: './Projects.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  private projectsSubscription: Subscription;

  constructor(private http: HttpClient, private db: DbService) {
  }

  ngOnInit() {
    this.projectsSubscription = this.db.getProjects().subscribe((queryResult) => {
      console.log(queryResult);
    });
  }
}

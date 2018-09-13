import {Component, OnInit} from '@angular/core';
import {ProjectDetailsObject} from '../../domain/project-details-object';

@Component({
  selector: 'app-project-details',
  templateUrl: './Project-details.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  public pdo: ProjectDetailsObject;

  constructor() {
  }

  ngOnInit() {

  }
}

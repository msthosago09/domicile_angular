import {Component, OnInit} from '@angular/core';
import {ProjectDetailsObject} from '../../domain/project-details-object';
import {ActivatedRoute} from '@angular/router';
import {DbService} from '../../providers/db.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './Project-details.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  pdo: ProjectDetailsObject;
  id: number;

  constructor(private route: ActivatedRoute, private db: DbService) {
    this.route.queryParams.subscribe(params => {
      this.id = params['projId'];
    });
  }

  ngOnInit() {
    this.pdo = this.db.getSelectedProject(this.id);
    console.log(this.pdo);
  }
}

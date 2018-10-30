import {Component, OnInit} from '@angular/core';
import {ProjectDetailsObject} from '../../domain/project-details-object';
import {ActivatedRoute} from '@angular/router';
import {DbService} from '../../providers/db.service';
import * as $ from 'jquery';
import {ProjectCommentObject} from '../../domain/project-comment-object';

@Component({
  selector: 'app-project-details',
  templateUrl: './Project-details.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  public userName = '';
  public userComment = '';
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

  addComment(name, comment) {
    const tmpComment = new ProjectCommentObject();
    tmpComment.COMMENTOR_NAME = name;
    tmpComment.COMMENT = comment;
    tmpComment.PROJECT_ID = this.id;
    const request = $.ajax({
      url: '/assets/php/db-add-project.php',
      type: 'post',
      data: tmpComment
    });
    const that = this;
    request.done(function (response) {
      console.log(response);
    });
  }
}

import {Component} from '@angular/core';
import {ProjectObject} from '../../domain/project-object';
import {DbService} from '../../providers/db.service';
import {Subscription} from 'rxjs';
import * as $ from 'jquery';

@Component({
  selector: 'app-admin',
  templateUrl: './Admin.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  private tmpProject: ProjectObject;
  private addProjectSubscription: Subscription;
  public projectTitle = '';
  public projectDescription = '';

  constructor(private db: DbService) {
  }

  submitProject() {
    if (this.projectTitle !== '' && this.projectDescription !== '') {
      this.tmpProject = new ProjectObject();
      this.tmpProject.ID = parseInt(this.makeid(), 10);
      this.tmpProject.TITLE = this.projectTitle;
      this.tmpProject.DESCRIPTION = this.projectDescription;
      console.log('Calling post');
      console.log(this.tmpProject);
      const msg = {id: this.tmpProject.ID, projTitle: this.tmpProject.TITLE, projDesc: this.tmpProject.DESCRIPTION};
      const request = $.ajax({
        url: '/assets/php/db-add-project.php',
        type: 'post',
        data: msg
      });

      request.done(function (response, textStatus, jqXHR) {
        console.log(response);
      });
    }
  }

  private makeid() {
    let text = '';
    const possible = '0123456789';
    for (let i = 0; i < 6; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

}

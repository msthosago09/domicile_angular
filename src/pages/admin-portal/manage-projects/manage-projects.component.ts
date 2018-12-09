import {Component} from '@angular/core';
import * as $ from 'jquery';
import {ProjectObject} from '../../../domain/project-object';
import {DbService} from '../../../providers/db.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-manage-projects',
  templateUrl: './Manage Projects.html',
  styleUrls: ['./manage-projects.component.css']
})
export class ManageProjectsComponent {
  private tmpProject: ProjectObject;
  public projectTitle = '';
  public projectDescription = '';
  private fd: FormData;
  public projectCreated = false;
  public projectSubmitted = false;
  private projectDeleted: boolean;
  private projectsSubscription: Subscription;
  public projObjects: ProjectObject[] = [];

  constructor(private db: DbService) {
    this.projectsSubscription = this.db.getProjects().subscribe((queryResult: ProjectObject[]) => {
      this.projObjects = queryResult;
    });
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
      const that = this;
      request.done(function (response) {
        that.projectCreated = true;
        console.log(response);
      });
    }
  }

  cancelProject() {
    this.projectTitle = '';
    this.projectDescription = '';
  }

  private makeid() {
    let text = '';
    const possible = '0123456789';
    for (let i = 0; i < 6; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  onFileChanged(event) {
    const formData = new FormData();
    Array.from(event.target.files).forEach((file: File) => {
      formData.append('photos[]', file, file.name);
      formData.append('projectId', this.tmpProject.ID.toString());
    });
    this.fd = formData;
  }

  sendImagesToServer() {
    if (this.fd !== null) {
      const request = $.ajax({
        url: '/assets/php/db-add-images.php',
        type: 'post',
        processData: false,
        contentType: false,
        data: this.fd
      });
      const that = this;
      request.done(function (response) {
        that.projectSubmitted = true;
        alert('Project added.');
        console.log(response);
      });
    }
  }

  deleteProject() {
    const formData = new FormData();
    formData.append('projID', this.db.sharedProjectID);
    formData.append('projTitle', this.db.sharedProjectToDelete);
    if (formData !== null) {
      const request = $.ajax({
        url: '/assets/php/db-delete-project.php',
        type: 'post',
        processData: false,
        contentType: false,
        data: formData
      });
      const that = this;
      request.done(function (response) {
        that.projectDeleted = true;
        document.getElementById('projDelAlert').style.visibility = 'visible';
        alert('Project deleted.');
        console.log(response);
      });
    }
  }

  selectProject(title, id) {
    this.db.sharedProjectToDelete = title;
    this.db.sharedProjectID = id;
    console.log('SelecteDDD: ' + id);
  }

}


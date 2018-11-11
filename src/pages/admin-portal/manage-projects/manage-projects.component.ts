import {Component} from '@angular/core';
import * as $ from 'jquery';
import {HttpClient} from '@angular/common/http';
import {ProjectObject} from '../../../domain/project-object';
import {DbService} from '../../../providers/db.service';

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

  constructor(private db: DbService, private http: HttpClient) {
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
        console.log(response);
      });
    }
  }
}


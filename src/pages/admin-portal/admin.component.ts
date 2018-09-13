import {Component} from '@angular/core';
import {ProjectObject} from '../../domain/project-object';
import {DbService} from '../../providers/db.service';
import * as $ from 'jquery';
import {HttpClient} from '@angular/common/http';
import {connectableObservableDescriptor} from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-admin',
  templateUrl: './Admin.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  private tmpProject: ProjectObject;
  public projectTitle = '';
  public projectDescription = '';
  file;

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
      // TODO: reuse this call for adding comments
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

  onFileChanged(event) {
    const formData = new FormData();
    Array.from(event.target.files).forEach((file: File) => formData.append('photos[]', file, file.name));
    console.log('changed');
    console.log(formData.get('photos[]'));
    const request = $.ajax({
      url: '/assets/php/db-add-images.php',
      type: 'post',
      processData: false,
      contentType: false,
      data: formData
    });

    request.done(function (response, textStatus, jqXHR) {
      console.log(response);
    });
  }
}


import {Component} from '@angular/core';
import * as $ from 'jquery';
import {HttpClient} from '@angular/common/http';
import {ProjectObject} from '../../../domain/project-object';
import {ProjectLinkObject} from '../../../domain/project-link-object';
import {ProjectDocumentObject} from '../../../domain/project-document-object';
import {DbService} from '../../../providers/db.service';

@Component({
  selector: 'app-manage-links',
  templateUrl: './Manage Links.html',
  styleUrls: ['./manage-links.component.css']
})
export class ManageLinksComponent {
  public linkTitle = '';
  public linkUrl = '';
  public linkCreated: boolean;
  public linkCount = 0;
  private linkSubscription;
  public linkObjects: ProjectLinkObject[] = [];
  private linkDeleted: boolean;

  constructor(private db: DbService) {
    this.linkSubscription = this.db.getLinks().subscribe((links: ProjectLinkObject[]) => {
      this.linkObjects = links;
      this.linkCount = this.linkObjects.length;
    });
  }


  cancelLink() {

  }

  deleteLink() {
    const formData = new FormData();
    formData.append('linkTitle',  this.db.sharedDocToDelete);
    if (formData !== null) {
      const request = $.ajax({
        url: '/assets/php/db-delete-weblink.php',
        type: 'post',
        processData: false,
        contentType: false,
        data: formData
      });
      const that = this;
      request.done(function (response) {
        that.linkDeleted = true;
        alert('Link deleted.');
        console.log(response);
      });
    }
  }

  selectLink(id) {
    this.db.sharedDocToDelete = id;
    console.log('SelecteDDD: ' + id);
  }

  submitLink() {
    if (this.linkTitle !== '' && this.linkUrl !== '') {
      console.log('Calling post');
      const msg = {Title: this.linkTitle, Url: this.linkUrl};
      const request = $.ajax({
        url: '/assets/php/db-add-weblink.php',
        type: 'post',
        data: msg
      });
      const that = this;
      request.done(function (response) {
        that.linkCreated = true;
        alert('Link added.');
        console.log(response);
      });
    }
  }

}


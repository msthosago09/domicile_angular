import {Component} from '@angular/core';
import * as $ from 'jquery';
import {DbService} from '../../../providers/db.service';
import {ProjectDocumentObject} from '../../../domain/project-document-object';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-manage-documents',
  templateUrl: './Manage Documents.html',
  styleUrls: ['./manage-documents.component.css']
})
export class ManageDocumentsComponent {
  public documentTitle = '';
  public documentDescription = '';
  private fd: FormData;
  public docSubmitted: boolean;
  public docDeleted: boolean;
  private docSubscription: Subscription;
  public docObjects: ProjectDocumentObject[] = [];
  public docCount = 0;

  constructor(private db: DbService) {
    this.docSubscription = this.db.getDocuments().subscribe((docs: ProjectDocumentObject[]) => {
      this.docObjects = docs;
      this.docCount = this.docObjects.length;
    });
  }

  cancelDoc() {

  }

  deleteDoc() {
    this.fd = new FormData();
    this.fd.append('docTitle',  this.db.sharedDocToDelete);
    if (this.fd !== null) {
      const request = $.ajax({
        url: '/assets/php/db-delete-document.php',
        type: 'post',
        processData: false,
        contentType: false,
        data: this.fd
      });
      const that = this;
      request.done(function (response) {
        that.docDeleted = true;
        alert('Document deleted.')
        console.log(response);
      });
    }
    this.fd = new FormData();
  }

  selectDoc(id) {
    this.db.sharedDocToDelete = id;
    console.log('SelecteDDD: ' + id);
  }

  onFileChanged(event) {
    this.fd = new FormData();
    Array.from(event.target.files).forEach((file: File) => {
      this.fd.append('documents[]', file, file.name);
    });
  }

  sendDocumentToServer() {
    this.fd.append('Title', this.documentTitle);
    this.fd.append('Description', this.documentDescription);
    if (this.fd !== null) {
      const request = $.ajax({
        url: '/assets/php/db-add-document.php',
        type: 'post',
        processData: false,
        contentType: false,
        data: this.fd
      });
      const that = this;
      request.done(function (response) {
        that.docSubmitted = true;
        alert('Document added.')
        console.log(response);
      });
    }
  }
}


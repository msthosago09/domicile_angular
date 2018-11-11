import {Component} from '@angular/core';
import * as $ from 'jquery';
import {DbService} from '../../../providers/db.service';
import {ProjectDocumentObject} from '../../../domain/project-document-object';


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
  private docSubscription;
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

  onFileChanged(event) {
    const formData = new FormData();
    Array.from(event.target.files).forEach((file: File) => {
      formData.append('documents[]', file, file.name);
    });
    this.fd = formData;
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
        console.log(response);
      });
    }
  }
}


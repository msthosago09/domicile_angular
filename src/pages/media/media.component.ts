import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DbService} from '../../providers/db.service';
import {Subscription} from 'rxjs';
import {ProjectLinkObject} from '../../domain/project-link-object';
import {ProjectDocumentObject} from '../../domain/project-document-object';

@Component({
  selector: 'app-media',
  templateUrl: './Media.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  linkObjects: ProjectLinkObject[] = [];
  docObjects: ProjectDocumentObject[] = [];
  public docCount = 0;
  public linkCount = 0;
  linkSubscription: Subscription;
  docSubscription: Subscription;

  constructor(private http: HttpClient, private db: DbService) {
  }

  ngOnInit() {
    this.linkSubscription = this.db.getLinks().subscribe((links: ProjectLinkObject[]) => {
      this.linkObjects = links;
      this.linkCount = this.linkObjects.length;
    });
    this.docSubscription = this.db.getDocuments().subscribe((docs: ProjectDocumentObject[]) => {
      this.docObjects = docs;
      this.docCount = this.docObjects.length;
    });
  }

}

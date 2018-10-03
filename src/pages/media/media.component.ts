import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DbService} from '../../providers/db.service';

@Component({
  selector: 'app-media',
  templateUrl: './Media.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  constructor(private http: HttpClient, private db: DbService) {
  }

  ngOnInit() {

  }
}

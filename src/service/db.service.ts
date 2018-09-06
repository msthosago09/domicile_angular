import {Injectable} from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProjectObject} from '../domain/project-object';

@Injectable()
export class DbService {
  constructor( private _http: HttpClient) {
  }

  getProjects(): Observable<Object[]> {
    return null;
    // return this._http.get('../php/db-fetch-projects.php');
  }
}

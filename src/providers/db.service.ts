import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProjectObject} from '../domain/project-object';

@Injectable()
export class DbService {
  constructor(private _http: HttpClient) {
  }

  getProjects(): Observable<any> {
    console.log('get projects');
    return this._http.get('/assets/php/db-fetch-projects.php');
  }
  //add images
}

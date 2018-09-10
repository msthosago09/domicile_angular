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

  addProject(project: ProjectObject): Observable<any> {
    console.log('adding project');
    const data = {id: project.ID, projTitle: project.TITLE, projDesc: project.DESCRIPTION};
    console.log(data);
    return this._http.post('/assets/php/db-add-project.php', data, {responseType: 'text'});
  }

  //add comment
  //add images
}

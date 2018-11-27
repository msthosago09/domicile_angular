import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProjectDetailsObject} from '../domain/project-details-object';

@Injectable()
export class DbService {

  public sharedProjectArray: ProjectDetailsObject[];
  public sharedDocToDelete: string;
  public sharedProjectToDelete: string;
  public sharedLinkToDelete: string;
  public sharedProjectID: string;

  constructor(private _http: HttpClient) {
  }


  getComments(): Observable<any> {
    console.log('get comments');
    return this._http.get('/assets/php/db-fetch-comments.php');
  }

  getLinks(): Observable<any> {
    console.log('get link');
    return this._http.get('/assets/php/db-fetch-links.php');
  }

  getDocuments(): Observable<any> {
    console.log('get documents');
    return this._http.get('/assets/php/db-fetch-docs.php');
  }

  getProjects(): Observable<any> {
    console.log('get projects');
    return this._http.get('/assets/php/db-fetch-projects.php');
  }

  getProjectImages(): Observable<any> {
    console.log('get project pics');
    return this._http.get('/assets/php/db-fetch-project-images.php');
  }

  setProjectArray(pa: ProjectDetailsObject[]) {
    this.sharedProjectArray = pa;
  }

  getSelectedProject(id: number): ProjectDetailsObject {
    for (const el of this.sharedProjectArray) {
      if (el.selectedProject.ID === id) {
        return el;
      }
    }
    console.log('call failed');
  }
}

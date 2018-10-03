import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DbService} from '../../providers/db.service';
import {Subscription} from 'rxjs';
import {ProjectObject} from '../../domain/project-object';
import {ProjectImageObject} from '../../domain/project-image-object';
import {ProjectDetailsObject} from '../../domain/project-details-object';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './Projects.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  private projectsSubscription: Subscription;
  private imageSubscription: Subscription;
  public completeProjectArray: ProjectDetailsObject[] = [];

  constructor(private http: HttpClient, private db: DbService, private router: Router) {
  }

  ngOnInit() {
    // show loader
    let projectObjectArray = [];
    let projectImageArray = [];
    this.projectsSubscription = this.db.getProjects().subscribe((queryResult: ProjectObject[]) => {
      projectObjectArray = queryResult;
      this.imageSubscription = this.db.getProjectImages().subscribe((queryResult2: ProjectImageObject[]) => {
        projectImageArray = queryResult2;
        this.processPage(projectImageArray, projectObjectArray);
        // hide loader
      });
    });
  }

  public openProject(selectedPdo: number) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        'projId': selectedPdo
      }
    };
    this.router.navigate(['project-details'], navigationExtras);
  }

  private processPage(images: ProjectImageObject[], projects: ProjectObject[]) {
    // dismiss loader after completion
    if (images.length !== 0 && projects.length !== 0) {
      for (const singleProject of projects) {
        const pdo = new ProjectDetailsObject();
        pdo.selectedProject = singleProject;
        pdo.projectPictures = [];
        for (const singleImage of images) {
          if (singleImage.PROJECT_ID === singleProject.ID) {
            pdo.projectPictures.push(singleImage.IMAGE_LINK);
          }
        }
        this.completeProjectArray.push(pdo);
        this.db.setProjectArray(this.completeProjectArray);
      }
    }
    console.log(this.completeProjectArray);
  }
}

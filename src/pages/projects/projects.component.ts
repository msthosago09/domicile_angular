import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DbService} from '../../providers/db.service';
import {Subscription} from 'rxjs';
import {ProjectObject} from '../../domain/project-object';
import {ProjectImageObject} from '../../domain/project-image-object';
import {ProjectDetailsObject} from '../../domain/project-details-object';
import {NavigationExtras, Router} from '@angular/router';
import * as $ from 'jquery';
import {Overlay, OverlayConfig} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';


@Component({
  selector: 'app-projects',
  templateUrl: './Projects.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  private projectsSubscription: Subscription;
  private imageSubscription: Subscription;
  public completeProjectArray: ProjectDetailsObject[] = [];

  constructor(private http: HttpClient, private db: DbService, private router: Router, public viewContainerRef: ViewContainerRef,
              private overlay: Overlay) {
  }

  ngOnInit() {
    // show loader
    this.openSpinner();
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
        // document.getElementById('projSpinner').style.display = 'none';
        // document.getElementById('projCards').style.display = 'block';
      }
    }
    console.log(this.completeProjectArray);
  }

  public openSpinner() {
    const config = new OverlayConfig();

    config.hasBackdrop = true;
    config.positionStrategy = this.overlay.position()
      .global()
      .left('40%')
      .top('25%');
    const overlayRef = this.overlay.create(config);

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();
    });

    overlayRef.attach(new ComponentPortal(ProjectsSpinnerComponent, this.viewContainerRef));
  }

}

@Component({
  selector: 'app-projects-spinner',
  template: '<div class="proj-spinner" id="projSpinner" style="top: 50%;left: 50%;">' +
    '<mat-spinner style="margin:0 auto;"></mat-spinner></div>'
})
export class ProjectsSpinnerComponent {
}

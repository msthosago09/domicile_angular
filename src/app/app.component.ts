import {Component, HostListener} from '@angular/core';
import {Router} from '@angular/router';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Domicile Group';
  public accessCode = '';

  constructor(private router: Router) {
  }

  accessAdmin() {
    if (this.accessCode !== '') {
      if (this.accessCode === '3487' || this.accessCode === '5920') {
        localStorage.setItem('loggedIn', 'true');
        this.router.navigate(['admin']);
        this.accessCode = '';
      }
    }

  }

  close() {
    this.accessCode = '';
  }
}

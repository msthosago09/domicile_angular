import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './Home.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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

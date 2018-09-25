import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Domicile Group';

  constructor() {
  }

/*  @HostListener('window:scroll', ['$event'])
  doScroll($event) {
    console.log('scroll');
    const navbar = document.getElementById('navbar');
    const sticky = navbar.offsetTop;
    if (window.pageYOffset > sticky) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  }*/
}

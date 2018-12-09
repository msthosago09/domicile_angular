import {Component} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './Contact.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public sender = '';
  public email = '';
  public subject = '';
  public message = '';

  constructor() {
  }

  public submitEmail() {
    console.log('submitting');
    console.log(this.sender);
    if (this.sender !== '' && this.email !== '' && this.subject !== '' && this.message !== '') {
      const msg = {name: this.sender, email: this.email, subject: this.subject, message: this.message};
      const request = $.ajax({
        url: '/assets/php/send-email.php',
        type: 'post',
        data: msg
      });

      request.done(function (response) {
        alert('Email sent.');
        console.log(response);
      });
    }
  }
}

import { ContactService } from './../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ScrollService } from 'src/scroll.service';
import {
  faFacebook,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public telephone = '+48 570 503 127';
  public email = 'ekiparemontowa2@gmail.com';
  public fbLink = 'https://www.facebook.com/profile.php?id=100054263510773';
  public emailControl = new FormControl();
  public bodyControl = new FormControl();
  public callMeForm = new FormGroup({
    email: this.emailControl,
    body: this.bodyControl,
  });

  constructor(
    private scrollService: ScrollService,
    private fBuilder: FormBuilder,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.scrollService.diableScroll();
  }

  public goToFb() {
    window.location.href = this.fbLink;
  }

  public callMe() {
    console.log('CallMMEEEEEEEE');
    this.contactService.requestContact(
      this.bodyControl.value,
      this.emailControl.value
    );
  }
}

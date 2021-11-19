import { ContactService } from './../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ScrollService } from 'src/scroll.service';
import { SitedataService } from '../services/sitedata.service';
// @ts-ignore
import { SiteData } from 'SiteData';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public telephone = '';
  public email = '';
  public fbLink = '';
  public instaLink = '';
  public emailControl = new FormControl();
  public bodyControl = new FormControl();
  public callMeForm = new FormGroup({
    email: this.emailControl,
    body: this.bodyControl,
  });
  public emailSent: boolean = false;

  constructor(
    private scrollService: ScrollService,
    private fBuilder: FormBuilder,
    private contactService: ContactService,
    private siteDataService: SitedataService,
    private clipboardService: ClipboardService
  ) {}

  ngOnInit(): void {
    this.scrollService.diableScroll();
    this.siteDataService.SiteData.subscribe((res: SiteData) => {
      this.telephone = res.contacts.telephone;
      this.email = res.contacts.email;
      this.fbLink = res.contacts.fbLink;
      this.instaLink = res.contacts.instaLink;
    });
  }

  public goToFb() {
    window.location.href = this.fbLink;
  }
  public goToInsta() {
    window.location.href = this.instaLink;
  }

  public copyEmail() {
    this.clipboardService.copy(this.email);
  }

  public copyTelephone() {
    this.clipboardService.copy(this.telephone);
  }

  public callMe() {
    this.contactService
      .requestContact(this.bodyControl.value, this.emailControl.value)
      .subscribe((response) => {
        if (response == 'Success') this.emailSent = true;
      });
  }
}

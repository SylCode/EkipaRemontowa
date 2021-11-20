import { SitedataService } from 'src/app/services/sitedata.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// @ts-ignore
import { SiteData } from 'SiteData';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  public data: any;
  public siteData: SiteData;
  public loggedIn = false;
  public saved = false;
  public loginControl = new FormControl();
  public passControl = new FormControl();
  public loginForm = new FormGroup({
    login: this.loginControl,
    pass: this.passControl,
  });
  public modulesHint: string;

  public reservationControl = new FormControl();
  public companyNameControl = new FormControl();
  public telephoneControl = new FormControl();
  public emailControl = new FormControl();
  public fbLinkControl = new FormControl();
  public instaLinkControl = new FormControl();
  public activeModulesControl = new FormControl();

  public siteTitleControl = new FormControl();
  public servicesControl = new FormControl();
  public realisationsControl = new FormControl();
  public aboutControl = new FormControl();

  public dataForm = new FormGroup({
    companyName: this.companyNameControl,
    title: this.siteTitleControl,
    reservation: this.reservationControl,
    tel: this.telephoneControl,
    email: this.emailControl,
    fb: this.fbLinkControl,
    insta: this.instaLinkControl,
    activeModules: this.activeModulesControl,
    services: this.servicesControl,
    about: this.aboutControl,
    realisations: this.realisationsControl,
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private adminService: AdminService,
    private siteDataService: SitedataService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: any) => {
      this.siteData = data.siteData;
      this.data = this.siteData.Titles.title;
      this.modulesHint = this.siteData.ActiveModules.Hint;
      this.dataForm.controls['companyName'].setValue(
        this.siteData.Titles.companyName
      );
      this.dataForm.controls['title'].setValue(this.siteData.Titles.title);
      this.dataForm.controls['reservation'].setValue(this.siteData.rezerwacja);
      this.dataForm.controls['tel'].setValue(this.siteData.contacts.telephone);
      this.dataForm.controls['email'].setValue(this.siteData.contacts.email);
      this.dataForm.controls['fb'].setValue(this.siteData.contacts.fbLink);
      this.dataForm.controls['insta'].setValue(
        this.siteData.contacts.instaLink
      );
      this.dataForm.controls['activeModules'].setValue(
        this.siteData.ActiveModules.Modules
      );
      this.dataForm.controls['services'].setValue(this.siteData.uslugi);
      this.dataForm.controls['about'].setValue(this.siteData.about);
      this.dataForm.controls['realisations'].setValue(this.siteData.realizacje);
    });
  }

  public authorise() {
    this.adminService
      .login(this.loginControl.value, this.passControl.value)
      .subscribe((res) => {
        if (res.Status == 'OK') this.loggedIn = true;
      });
  }

  public updateSiteData() {
    console.log(this.siteData);
    this.siteDataService.updateSiteData(this.siteData).subscribe((res) => {
      if (res.Status == 'Success') this.saved = true;
    });
  }
}

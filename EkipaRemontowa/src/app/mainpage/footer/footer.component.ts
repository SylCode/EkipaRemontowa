import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  private currentYear!: number;

  public getCurrentYear() {
    return this.currentYear;
  }

  constructor() {
    var date = new Date(Date.now());
    this.currentYear = date.getUTCFullYear();
  }

  ngOnInit(): void {}
}

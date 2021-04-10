import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-realizacje',
  templateUrl: './realizacje.component.html',
  styleUrls: ['./realizacje.component.scss']
})
export class RealizacjeComponent implements OnInit {

  public items = ['2021-03: Chalupnicza','2020-01: Magellana','bbal','blablabl']
  constructor() { }

  ngOnInit(): void {
  }

}

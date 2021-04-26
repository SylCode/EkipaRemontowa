import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public availability: string = "Koniec Lipca";

  public left=350;
  constructor() { }

  ngOnInit(): void {
  }

}

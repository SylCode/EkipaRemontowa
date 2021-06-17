import { Component, OnInit } from '@angular/core';
import { IoService } from 'src/app/services/io.service';

@Component({
  selector: 'app-realizacje',
  templateUrl: './realizacje.component.html',
  styleUrls: ['./realizacje.component.scss'],
})
export class RealizacjeComponent implements OnInit {
  public items: string[] = [];
  constructor(private ioService: IoService) {
    this.ioService.getRealisations().subscribe((data) => {
      this.items = data;
    });
  }

  ngOnInit(): void {}
}

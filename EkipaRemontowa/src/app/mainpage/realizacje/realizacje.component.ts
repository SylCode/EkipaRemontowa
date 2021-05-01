import { IoService } from 'src/app/io.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-realizacje',
  templateUrl: './realizacje.component.html',
  styleUrls: ['./realizacje.component.scss']
})
export class RealizacjeComponent implements OnInit {

  public items: string[] = []
  constructor(private ioService: IoService) { 
    this.ioService.getRealisations().subscribe(data => {
      this.items = data;
    })
  }

  ngOnInit(): void {
  }

}

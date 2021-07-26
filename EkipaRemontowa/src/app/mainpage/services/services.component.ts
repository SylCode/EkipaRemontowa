import { IoService } from 'src/app/services/io.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  public items: string[] = [];
  constructor(private ioService: IoService) {
    this.ioService.getServices().subscribe((data) => {
      this.items = data;
    });
  }

  ngOnInit(): void {}
}

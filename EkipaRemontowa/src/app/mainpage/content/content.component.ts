import { ScrollService } from 'src/scroll.service';
import { Component, OnInit } from '@angular/core';
import { IoService } from 'src/app/services/io.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  public availability: string = '';
  public offer: string = '';

  public left = 350;
  constructor(
    private ioService: IoService,
    private scrollService: ScrollService
  ) {}

  ngOnInit(): void {
    this.ioService.getReservationDate().subscribe((result) => {
      this.availability = result;
    });
  }

  public scrollTo(destination: string) {
    this.scrollService.scrollTo(destination);
  }
}

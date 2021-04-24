import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/scroll.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.scrollService.diableScroll();
  }

}

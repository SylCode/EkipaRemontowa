import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ScrollService } from 'src/scroll.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public telephone = "+48 570 503 127";
  public email = "ekiparemontowa2@gmail.com";
  public fbLink = "https://www.facebook.com/profile.php?id=100054263510773";
  // public callMeForm = this.fBuilder.group({
  //   email:''
  // });

  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {
    this.scrollService.diableScroll();
  }

  public goToFb(){
    window.location.href = this.fbLink;
  }

  public callMe(){

  }

}

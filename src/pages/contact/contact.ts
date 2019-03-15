import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SlidePage } from '../slide/slide';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  title:string = "HTML 5";
  

  constructor(
    public navCtrl: NavController
    ) {}

  goToSlide(){
    this.navCtrl.push(SlidePage);
  }
}

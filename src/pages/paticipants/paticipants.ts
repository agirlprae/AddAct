import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Paticipants page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-paticipants',
  templateUrl: 'paticipants.html'
})
export class PaticipantsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello PaticipantsPage Page');
  }

}

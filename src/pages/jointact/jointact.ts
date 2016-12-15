import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Jointact page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-jointact',
  templateUrl: 'jointact.html'
})
export class JointactPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello JointactPage Page');
  }

}

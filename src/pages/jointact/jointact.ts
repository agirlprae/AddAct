import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { ListPage } from '../list/list';
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

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController
   ) { }

  home(){
      this.navCtrl.push(HomePage);
  }

  list(){
      this.navCtrl.push(ListPage);
  }

  doPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Added!',
      message: "If you want to add participants click Add. ",

      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Add',
          handler: data => {
            console.log('Add clicked');
          }
        }
      ]
    });
    prompt.present();
  }

}


import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { ListPage } from '../list/list';
import { PaticipantsPage } from '../paticipants/paticipants';

/*
  Generated class for the Detail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html'
})

export class EditPage {
  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController
  ) {}

  home(){
      this.navCtrl.push(HomePage);
  }

  list(){
      this.navCtrl.push(ListPage);
  }

  PtcpPage(){
    this.navCtrl.push(PaticipantsPage);
  }

  doPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Updated!',

      buttons: [
        {
          text: 'Okay',
          handler: data => {
            console.log('Okay clicked');
          }
        }
      ]
    });
    prompt.present();
  }

}

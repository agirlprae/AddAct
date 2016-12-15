import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform, ActionSheetController, AlertController } from 'ionic-angular';

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
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public alertCtrl: AlertController
  ) { }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Select',
      cssClass: 'page-edit',
      buttons: [
        {
          text: 'Paticipants',
          role: 'Save',
          icon: !this.platform.is('ios') ? 'contacts' : null,
          handler: () => {
            console.log('Contacts clicked');
          }
        },
      ]
    });
    actionSheet.present();
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

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-paticipants',
  templateUrl: 'paticipants.html'
})


export class PaticipantsPage {
  constructor(
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController
  ) { }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Select',
      cssClass: 'page-paticipants',
      buttons: [
        {
          text: 'Add',
          role: 'Add',
          icon: !this.platform.is('ios') ? 'add' : null,
          handler: () => {
            console.log('Add clicked');
          }
        },
      
        {
          text: 'Close',
          role: 'close',
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Close clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  constructor(
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController
  ) { }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Select',
      cssClass: 'page-home',
      buttons: [
        {
          text: 'Add Activities',
          role: 'Add',
          icon: !this.platform.is('ios') ? 'add' : null,
          handler: () => {
            console.log('Add clicked');
          }
        },
      
        {
          text: 'Edit Activities',
          icon: !this.platform.is('ios') ? 'hammer' : null,
          handler: () => {
            console.log('Edit clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
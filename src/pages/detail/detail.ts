import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { ListPage } from '../list/list';
/*
  Generated class for the Detail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})

export class DetailPage {
  constructor(
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public navCtrl: NavController
  ) { }

  home(){
      this.navCtrl.push(HomePage);
  }

  list(){
      this.navCtrl.push(ListPage);
  }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Select',
      cssClass: 'page-detail',
      buttons: [
        {
          text: 'Save',
          role: 'Save',
          icon: !this.platform.is('ios') ? 'checkmark' : null,
          handler: () => {
            console.log('Add clicked');
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
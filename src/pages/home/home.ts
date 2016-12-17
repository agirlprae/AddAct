import { Component } from '@angular/core';
import { Platform, ActionSheetController, NavController } from 'ionic-angular';

import { DetailPage } from '../detail/detail';
import { EditPage } from '../edit/edit';

import { ListPage } from '../list/list';

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
    public actionsheetCtrl: ActionSheetController,
    public navCtrl: NavController
  ) { }


  list(){
      this.navCtrl.push(ListPage);
  }

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
            this.navCtrl.push(DetailPage);
          }
        },
      
        {
          text: 'Edit Activities',
          icon: !this.platform.is('ios') ? 'hammer' : null,
          handler: () => {
            this.navCtrl.push(ListPage);
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
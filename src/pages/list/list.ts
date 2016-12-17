import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { EditPage } from '../edit/edit';


import { HomePage } from '../home/home';
/*
  Generated class for the Home page.
<<<<<<< HEAD
=======

>>>>>>> f11e58c81d8b3e92d4a3780864c3b1fd7581d99d
  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

export class ListPage {
  constructor(
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public navCtrl: NavController
  ) { }

  home(){
      this.navCtrl.push(HomePage);
  }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Select',
      cssClass: 'page-list',
      buttons: [
        {
          text: 'Edit',
          role: 'Edit',
          icon: !this.platform.is('ios') ? 'hammer' : null,
          handler: () => {
            console.log('Edit clicked');
            this.navCtrl.push(EditPage);
          }
        },
      
        {
          text: 'Delete',
          role: 'Delete',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },

        {
          text: 'Export',
          role: 'Export',
          icon: !this.platform.is('ios') ? 'download' : null,
          handler: () => {
            console.log('Export clicked');
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
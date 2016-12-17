import { Component } from '@angular/core';
import { ModalController, NavController,Platform, ActionSheetController } from 'ionic-angular';
import { AddPage } from '../add/add'
import { ItemPage } from '../item/item'
import { HomePage } from '../home/home';
import { EditPage } from '../edit/edit';
/*
  Generated class for the Home2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home2',
  templateUrl: 'home2.html',

})


export class Home2Page {
 
  public items = [];
 
  constructor(
  	public navCtrl: NavController, 
  	public modalCtrl: ModalController,
  	public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
  	) {  }
 
  ionViewDidLoad(){}

  home(){
      this.navCtrl.push(HomePage);
  }
 
  addItem(){
 
    let addModal = this.modalCtrl.create(AddPage);
    // call back when modal dismissed
    addModal.onDidDismiss((item) => {
      if(item){
        this.saveItem(item);
      }
    });
    addModal.present();
    
  }
 
  // viewItem(item){
  // 	this.navCtrl.push(ItemPage, {
  //   item: item
  // });
  // }

  saveItem(item){
    this.items.push(item);
  }


  selectItem(item) {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Select',
      cssClass: 'page-list',
      buttons: [
        {
          text: 'Edit',
          role: 'Edit',
          icon: !this.platform.is('ios') ? 'hammer' : null,
          handler: () => {
            this.navCtrl.push(EditPage);
          }
        },
      
        {
          text: 'Delete',
          role: 'Delete',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            if(this.items == item)
        		this.items.splice(item,1);
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
import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
/*
  Generated class for the Add page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})

export class AddPage {

 	title;
  	description;

  constructor(public navCtrl: NavController, public vc: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello AddItemPage Page');
  }

  saveItem(){

    let newItem = {

      title: this.title,
      description: this.description

    };

    this.vc.dismiss(newItem);

  }

  close(){
    this.vc.dismiss();
  }

}
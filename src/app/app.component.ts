import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { DetailPage } from '../pages/detail/detail';
import { JointactPage } from '../pages/jointact/jointact';
import { EditPage } from '../pages/edit/edit';
import { ListPage } from '../pages/list/list';
import { PaticipantsPage } from '../pages/paticipants/paticipants';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = EditPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}

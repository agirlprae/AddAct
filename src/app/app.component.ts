import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav  } from 'ionic-angular';
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


  rootPage = PaticipantsPage;


  // make UsersPage the root (or first) page
  //rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;


  constructor(public platform: Platform,  public menu: MenuController) {
    this.initializeApp();


    // set our app's pages
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'AddActivity', component: DetailPage },
      { title: 'ActivityList', component: ListPage },      
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    //this.menu.close();
    // navigate to the new page if it is not the current page
    //this.nav.setRoot(page.component);
    this.menu.close();
  }
}

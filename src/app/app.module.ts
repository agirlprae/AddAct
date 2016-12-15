import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { JointactPage } from '../pages/jointact/jointact';
import { ListPage } from '../pages/list/list';
import { PaticipantsPage } from '../pages/paticipants/paticipants';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    JointactPage,
    ListPage,
    PaticipantsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    JointactPage,
    ListPage,
    PaticipantsPage

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

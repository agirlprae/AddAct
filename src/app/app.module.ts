import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { DetailPage } from '../pages/detail/detail';
import { JointactPage } from '../pages/jointact/jointact';
import { EditPage } from '../pages/edit/edit';
import { ListPage } from '../pages/list/list';
import { PaticipantsPage } from '../pages/paticipants/paticipants';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage,
    JointactPage,
    EditPage,
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
    DetailPage,
    JointactPage,
    EditPage,
    ListPage,
    PaticipantsPage

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

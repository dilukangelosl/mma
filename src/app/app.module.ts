import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Storage } from '@ionic/storage';
import {CustomalertPage} from '../pages/customalert/customalert';

//new app pages

import {LoginPage} from '../pages/login/login';
import {HomePage} from  '../pages/home/home'
import {RegisterPage} from  '../pages/register/register';
import {LoginformPage} from '../pages/loginform/loginform';


//all pages

import {FeedPage} from '../pages/feed/feed';
import {FactsPage} from '../pages/facts/facts';
import {ProductsPage} from '../pages/products/products';
import {RecepiesPage} from '../pages/recepies/recepies';
import {OffersPage} from '../pages/offers/offers';
import {StandardsPage} from '../pages/standards/standards';
import {FeedviewPage} from '../pages/feedview/feedview';
import {ConsultantPagePage} from '../pages/consultant/consultant';
import {ChatPagePage} from '../pages/chat/chat';
// Import the AF2 Module
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';



//import global providers


import {Authservice} from '../providers/authservice';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyCWq1qvXcBVPLLyKvfSC6gNhkme8NsM-qg",
  authDomain: "marina-7f06c.firebaseapp.com",
  databaseURL: "https://marina-7f06c.firebaseio.com",
  storageBucket: "marina-7f06c.appspot.com",
  messagingSenderId: "171015200552"
};


const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};


@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    LoginPage,
    HomePage,
    LoginformPage,
    RegisterPage,
    CustomalertPage,
    FeedPage,
    FactsPage,
    ProductsPage,
    RecepiesPage,
    OffersPage,
    StandardsPage,
    FeedviewPage,
    ChatPagePage,
ConsultantPagePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig,myFirebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    LoginPage,
    HomePage,
    LoginformPage,
    RegisterPage,
    CustomalertPage,
     FeedPage,
    FactsPage,
    ProductsPage,
    RecepiesPage,
    OffersPage,
    StandardsPage,
    FeedviewPage,
    ChatPagePage,
    ConsultantPagePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Storage,Authservice]
})
export class AppModule {}

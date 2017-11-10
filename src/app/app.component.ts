import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Storage } from '@ionic/storage';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import {LoginPage} from  '../pages/login/login';
import {HomePage} from '../pages/home/home';


import {FeedPage} from '../pages/feed/feed';
import {FactsPage} from '../pages/facts/facts';
import {ProductsPage} from '../pages/products/products';
import {RecepiesPage} from '../pages/recepies/recepies';
import {OffersPage} from '../pages/offers/offers';
import {StandardsPage} from '../pages/standards/standards';
import {FeedviewPage} from '../pages/feedview/feedview';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  name:string ;
  age:number;
   isLoggedin:boolean;

  rootPage: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public storage:Storage) {

    this.rootPage = HomePage;







    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Facts', component: FactsPage },
      { title: 'Products', component: ProductsPage },
      { title: 'Recepies', component: RecepiesPage },
      { title: 'Offers', component: OffersPage },
      { title: 'Standards', component: StandardsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  hideSplashScreen() {
    if (Splashscreen) {
      setTimeout(() => {
        Splashscreen.hide();
      }, 100);
    }

}


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario

    if(page.title == "Home"){
      this.nav.setRoot(page.component);
    }
    else {

      this.nav.push(page.component);
    }

  }
}



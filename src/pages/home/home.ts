import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {FeedPage} from '../feed/feed';
import {FactsPage} from '../facts/facts';
import {ProductsPage} from '../products/products';
import {RecepiesPage} from '../recepies/recepies';
import {OffersPage} from '../offers/offers';
import {StandardsPage} from '../standards/standards';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }


  goToPage(page:any) {



   switch(page) {
    case 1:
        this.navCtrl.push(FeedPage)
        break;
    case 2:
         this.navCtrl.push(FactsPage)
        break;

         case 3:
         this.navCtrl.push(ProductsPage)
        break;

         case 4:
         this.navCtrl.push(RecepiesPage)
        break;

         case 5:
         this.navCtrl.push(OffersPage)
        break;

         case 6:
         this.navCtrl.push(StandardsPage)
        break;

         
    default:
        console.log("");
}
  }

}

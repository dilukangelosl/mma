import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Offers page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html'
})
export class OffersPage {
items:any ;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.items = [

      {
        image:"./assets/img/offer1.jpg",
        title:"Offer at Keels",
        des:"Get 50% Off Today"
      },
      {
        image:"./assets/img/offer2.jpg",
        title:"Offer at Keels",
        des:"Get 50% Off Today"
      },
      {
        image:"./assets/img/offer3.png",
        title:"Offer at Keels",
        des:"Get 50% Off Today"
      },
      {
        image:"./assets/img/offer4.jpg",
        title:"Offer at Keels",
        des:"Get 50% Off Today"
      },
      {
        image:"./assets/img/offer5.jpg",
        title:"Offer at Keels",
        des:"Get 50% Off Today"
      },
      {
        image:"./assets/img/offer6.jpg",
        title:"Offer at Keels",
        des:"Get 50% Off Today"
      }

    ];


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OffersPage');
  }

}

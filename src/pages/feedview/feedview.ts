import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import * as moment from 'moment';
/*
  Generated class for the Feedview page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-feedview',
  templateUrl: 'feedview.html'
})
export class FeedviewPage {





feed:any ; 


formatDate (date:any) {

  var m = moment(date);



return m.format('YYYY-MM-DD');
}
  constructor(public navCtrl: NavController, public navParams: NavParams) {

this.feed = this.navParams.get('feed');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedviewPage');
  }

}

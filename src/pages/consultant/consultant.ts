import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ChatPagePage} from '../chat/chat';
/*
  Generated class for the ConsultantPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-consultant',
  templateUrl: 'consultant.html'
})
export class ConsultantPagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultantPagePage');
  }


go(){
this.navCtrl.push(ChatPagePage);
}
}

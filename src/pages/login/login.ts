import { Component } from '@angular/core';
import { NavController, NavParams , ModalController, LoadingController, AlertController} from 'ionic-angular';
import  {RegisterPage} from '../register/register';
import {Authservice} from '../../providers/authservice';
import Auth = firebase.auth.Auth;
import {HomePage} from  '../home/home';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {


  username:any;
  password:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController, public auth:Authservice, public loadingCtrl:LoadingController, public alertCtrl:AlertController) {



  }

  login(email:any, password:any){
   var loader = this.showLoading();
   loader.present();

    this.auth.login(email,password).then((val)=>{
      loader.dismiss();
      console.log(val);

      this.navCtrl.setRoot(HomePage);


    }).catch((v) => {
      loader.dismiss();
      console.log(v.message);


      let alert = this.alertCtrl.create({
        title: 'Login Failed',
        message: v + "",
        buttons: ['Dismiss']
      });
      alert.present();
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  reg(){

    let profileModal = this.modalCtrl.create(RegisterPage);
    profileModal.present();
  }


  showLoading(){
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `
        <div>
              
              
              <img src="./assets/img/icon.png"  width="50"/>
              
             <section class="mod model-8">
  <div class="spinner"></div>
</section>
 
              </div>

`
    });


    return loading;
  }

}

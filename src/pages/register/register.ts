import { Component } from '@angular/core';
import { NavController, NavParams , ViewController, LoadingController, AlertController} from 'ionic-angular';
import {Authservice} from '../../providers/authservice';
import {HomePage} from '../home/home';
/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  password1:any ;
  password2:any;
email:any;
  passwordCheck:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController, public auth:Authservice, public loadingCtrl:LoadingController, public alertCtrl:AlertController) {

  }


  regitser(email:any, password:any){



    var loader =  this.showLoading() ;
    loader.present();
    this.auth.register(email, password).then((val) => {

    this.auth.login(email, password).then((val) => {

      loader.dismiss();
      this.navCtrl.setRoot(HomePage);

    })

    }).catch((err) => {

      loader.dismiss();

      let alert = this.alertCtrl.create({
        title: 'Registration Failed',
        message: err + "",
        buttons: ['Dismiss']
      });
      alert.present();

      console.log("error regitering");
      console.log(err);


    });
  }

  close (){

    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  passwordcheck(){

    if(this.password1 == this.password2){
     this.passwordCheck = true ;
    }
    else {
      this.passwordCheck = false;
    }
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






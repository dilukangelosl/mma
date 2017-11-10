import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFire ,AngularFireAuth} from 'angularfire2';
import {CustomalertPage} from '../pages/customalert/customalert';


/*
  Generated class for the Authservice provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Authservice {
  firebaseAuth: AngularFireAuth;
  user:any ;

  constructor(public http: Http,public af: AngularFire) {


    this.firebaseAuth = af.auth;

    this.af.auth.subscribe((user) => {
      this.user =  user ;
    })


  }


  login(email:any,password:any){
    return this.af.auth.login({email:email, password:password});
  }


  getUser (){
    return this.user;
  }


  register(email:any, password:any){

    return this.af.auth.createUser({email:email, password:password});
  }

  logout(){

    return this.af.auth.logout();
  }

  getUserid(){

    return this.af.auth.getAuth().uid;

  }

  forgetPassowrd(email:any){


    return firebase.auth().sendPasswordResetEmail(email);
  }




}

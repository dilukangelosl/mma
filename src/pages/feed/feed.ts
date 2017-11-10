import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';
import {FeedviewPage} from '../feedview/feedview';

/*
  Generated class for the Feed page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {


feeds:any ;
now:any ;

getTime(endTime:any){

  var obj ;
var now = this.now;//todays date
var end = moment(endTime); // another date
var duration = moment.duration(now.diff(end));
var hours = duration.asHours();
var mins = duration.asMinutes();
var days = duration.asDays();

if(mins < 60){

  if(mins > 1 ){
obj = Math.round(mins) + " mins ago";
  }
  else {
obj = Math.round(mins) + " min ago";
  }


}
else if(hours < 24){

  if(hours > 1) {
  obj = Math.round(hours) + " hours ago";
}
else {
    obj = Math.round(hours) + " hour ago";
}

}
else {

  if(days > 1 ){
 obj = Math.round(days) + " days ago";
  }
  else {
     obj = Math.round(days) + " day ago";
  }

}



return obj;

}
  constructor(public navCtrl: NavController, public navParams: NavParams) {

      //data Structure
var m = moment(new Date());



//his.now = m.format('YYYY-MM-DDTHH:mm:ss.sssZ')
this.now = m ;

      this.feeds = [   {

            image:"https://scontent.fcmb3-1.fna.fbcdn.net/v/t31.0-8/16819296_1526241664075769_4530616431967528785_o.jpg?oh=c9b93789600b9d829503294af4610dc7&oe=594A582D",
            title:"Did you Know?",
            publishedDate:"2017-02-23T12:29:10.1010+05:30",
            thumbnail:"./assets/img/logo.png",
            content:"",
            likes : [
              {
                  time:"",
                  user:""
             },

             {
                  time:"",
                  user:""
             },

             {
                  time:"",
                  user:""
             }


            ],
            comments : [

              {
                user: {userid:'12', image:'http://shinetheme.com/demosd/ipressa/wp-content/uploads/2014/03/09_team.png', name:'Tom Angelo'},
                comment:"Nice Post",
                datetime:"2017-02-23T12:29:10.1010+05:30"
              },
               {
                user:{userid:'12', image:'http://trendingtemplates.com/demos/wp-learnplus/wp-content/uploads/2015/02/student_011-1.png', name:'Rick Johnson'},
                comment:"Wow",
                datetime:"2017-02-23T12:40:10.1010+05:30"
              },
               {
                user:{userid:'12', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJYPSMGhMGufMLjnP9gIzKSNVZfHDi54dQPDerXQqvOtztJIx', name:'Chamara Junior'},
                comment:"Add me please XD",
                datetime:"2017-02-23T12:50:10.1010+05:30"
              }
            ]

        },

         {

            image:"https://scontent.fcmb3-1.fna.fbcdn.net/v/t1.0-0/s480x480/16508279_1512435608789708_1937110071935998453_n.png?oh=c9201864217eb508391ff74100dfb916&oe=59418E46",
            title:"Comment Now !!",
            publishedDate:"2017-02-20T13:29:10.1010+05:30",
            thumbnail:"./assets/img/logo.png",
            content:"",
            likes : [
              {
                  time:"",
                  user:""
             },

             {
                  time:"",
                  user:""
             },

             {
                  time:"",
                  user:""
             }


            ],
            comments : [

              {
                user: {userid:'12', image:'http://shinetheme.com/demosd/ipressa/wp-content/uploads/2014/03/09_team.png', name:'Tom Angelo'},
                comment:"Nice Post",
                datetime:"2017-02-23T12:29:10.1010+05:30"
              },
               {
                user:{userid:'12', image:'http://trendingtemplates.com/demos/wp-learnplus/wp-content/uploads/2015/02/student_011-1.png', name:'Rick Johnson'},
                comment:"Wow",
                datetime:"2017-02-23T12:40:10.1010+05:30"
              },
               {
                user:{userid:'12', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJYPSMGhMGufMLjnP9gIzKSNVZfHDi54dQPDerXQqvOtztJIx', name:'Chamara Junior'},
                comment:"Add me please XD",
                datetime:"2017-02-23T12:50:10.1010+05:30"
              },
               {
                user:{userid:'12', image:'http://endlesstheme.com/simplify1.0/images/profile/profile5.jpg', name:'Sujee Martin'},
                comment:"love this <3",
                datetime:"2017-02-23T12:55:10.1010+05:30"
              }
            ]

        },

        {

            image:"https://scontent.fcmb3-1.fna.fbcdn.net/v/t31.0-8/16463842_1510272285672707_7739163369323704553_o.jpg?oh=6e470d5395ae3197deb0bc15490e5a88&oe=5935E9B9",
            title:"Marina Spread, The Best Choice",
            publishedDate:"2017-02-20T14:29:10.1010+05:30",
            thumbnail:"./assets/img/logo.png",
            content:"",
            likes : [
              {
                  time:"",
                  user:""
             },

             {
                  time:"",
                  user:""
             },

             {
                  time:"",
                  user:""
             }


            ],
            comments : [

              {
                user: {userid:'12', image:'http://shinetheme.com/demosd/ipressa/wp-content/uploads/2014/03/09_team.png', name:'Tom Angelo'},
                comment:"Nice Post",
                datetime:"2017-02-23T12:29:10.1010+05:30"
              },
               {
                user:{userid:'12', image:'http://trendingtemplates.com/demos/wp-learnplus/wp-content/uploads/2015/02/student_011-1.png', name:'Rick Johnson'},
                comment:"Wow",
                datetime:"2017-02-23T12:40:10.1010+05:30"
              }
            ]

        }

      ];





  }


  viewFeed(feed:any)
  {

  this.navCtrl.push(FeedviewPage, {feed:feed});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

}

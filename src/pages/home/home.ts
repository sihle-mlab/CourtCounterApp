import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  firstTeamTotal: number = 0;
  secondTeamTotal: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  addToFirstTeamCounter(score : number){
    this.firstTeamTotal = this.firstTeamTotal + score;
    console.log("First Team Score is " + this.firstTeamTotal);
  }

  addToSecondTeamCounter(score : number){
    this.secondTeamTotal = this.secondTeamTotal + score;
    console.log("Second Team Score is " + this.secondTeamTotal);
  }

  resetCounter(){
    this.firstTeamTotal = 0;
    this.secondTeamTotal = 0;
  }

}

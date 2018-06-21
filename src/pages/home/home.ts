import { Component } from '@angular/core';
import { NavController, Events} from 'ionic-angular';
import { ShowPage } from '../show/show';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  
})
export class HomePage {
  gaming: string = "n64";
  gender: string = "f";
  os: string;
  music: string;
  month: string;
  year: number;
  sn1: string = "page1";
  isAndroid: boolean = false;
  isSec1Enable:boolean
  isSec2Enable:boolean
  isSec3Enable:boolean
  stepCondition:boolean

  musicAlertOpts: { title: string, subTitle: string };

  constructor(public navCtrl: NavController, private events:Events) {
    this.stepCondition = true;
    this.isSec1Enable =  true
    this.isSec2Enable =  false
    this.isSec3Enable =  false
    this.events.subscribe("sec1Submitted",() => {
        this.sn1="page2"
        this.isSec2Enable = true;
    })

    this.events.subscribe("sec2Submitted",() => {
      this.sn1="page3"
      this.isSec3Enable = true;
  })
  }
  
  load(){
    this.sn1 = "page2";
  }
  stpSelect() {
    console.log('STP selected');
  }
}

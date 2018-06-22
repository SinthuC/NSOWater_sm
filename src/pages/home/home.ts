import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { SN1 } from '../sn1/sn1'

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

  constructor(private modal:ModalController,public navCtrl: NavController, public navParams: NavParams, ) {

  }
  
    
  generateSN1(){
    this.navCtrl.push(SN1);
  }
  openModal(){
    this.modal.create('ModalPage');
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}

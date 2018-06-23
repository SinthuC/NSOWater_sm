import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController,ModalController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams,public menu : MenuController,private modal: ModalController) {
    menu.enable(true);
  }
  
    
  generateSN1(){
    this.navCtrl.push(SN1);
  }
  openModal(){
    const myModal = this.modal.create('ModalPage');
  
    myModal.present();
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}

import { Component } from '@angular/core';
import { Events } from 'ionic-angular';

/**
 * Generated class for the Sn1Sec1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sn1-sec1',
  templateUrl: 'sn1-sec1.html'
})
export class Sn1Sec1Component {

  text: string;

  constructor(private events: Events) {
    console.log('Hello Sn1Sec1Component Component');
    this.text = 'Hello World';
  }

  submit(){
    this.events.publish("sec1Submitted");

  }
}

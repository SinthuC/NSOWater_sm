import { Component } from '@angular/core';

/**
 * Generated class for the Sn1Sec2Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sn1-sec2',
  templateUrl: 'sn1-sec2.html'
})
export class Sn1Sec2Component {

  text: string;

  constructor() {
    console.log('Hello Sn1Sec2Component Component');
    this.text = 'Hello World';
  }

}

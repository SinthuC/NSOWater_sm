import { Component } from '@angular/core';

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

  constructor() {
    console.log('Hello Sn1Sec1Component Component');
    this.text = 'Hello World';
  }

}

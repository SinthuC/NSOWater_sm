import { Component } from '@angular/core';
import { Events } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
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
  lat: any;
  lon: any;
  wathId: any;
  message: any;
  constructor(private events: Events, public geo: Geolocation) {
    console.log('Hello Sn1Sec1Component Component');
    this.text = 'Hello World';
    this.message = "-";
    this.lon = "-";
    this.lat = "-";
  }

  submit(){
    this.events.publish("sec1Submitted");

  }

  loadMap()
  {
    let geoOption = {enableHighAccuracy : true};
    try
    {
      this.wathId = this.geo.watchPosition(geoOption).subscribe(data => 
      {
        this.lat = data.coords.latitude;
        this.lon = data.coords.longitude;
      },
      error =>
      {
        this.message = "GPS error" + error; 
      }
    )
    }catch(err)
    {
      alert("Error" + err);
      this.message = "Error" + err;
    }
  }
}


import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.page.html',
  styleUrls: ['./gps.page.scss'],
})



export class GpsPage implements OnInit {

  constructor() { }

  ngOnInit() {

    const printCurrentPosition = async () => {
      const coordinates = await Geolocation.getCurrentPosition();
    
      console.log('Current position:', coordinates);
    };

  }

  


}






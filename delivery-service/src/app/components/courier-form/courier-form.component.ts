import { Component, OnInit, OnChanges } from '@angular/core';
import { CourierService } from "../../services/courier.service";
import { GoogleService } from "../../services/google.service";
import {Http} from "@angular/http";


@Component({
  selector: 'app-courier-form',
  templateUrl: './courier-form.component.html',
  styleUrls: ['./courier-form.component.css']
})
export class CourierFormComponent implements OnInit, OnChanges {

  packages: Array<Object> = [];
  constructor(
    private _courier: CourierService,
    private _google: GoogleService
  ) { };
  latStr: number;
  lngStr: number;
  geoInfo: Array<Object> = [];
  getStreet(street) {
    let that = this;
    let address = street.split(' ');
    let result: string = '';
    let final: string;
    let format = 'json?';
    let baseUrl = 'https://maps.googleapis.com/maps/api/geocode/';
    let key = 'AIzaSyAkQ2qaepxFLi7zbCG4_1P13QmxzN3n-KM';
    for (let i = 0; i < address.length; i++) {
      result += address[i] + '+';
    }

    final = baseUrl + format + 'address=' + result + 'country:RS&key=' + key;

    this._google.getGeo(final)
      .subscribe(
        (data) => {
          that.geoInfo.push(data.results[0]);
          that.latStr = data.results[0].geometry.location.lng;
          that.lngStr = data.results[0].geometry.location.lat;
        }
      );

    console.log(this.lngStr);
    console.log(this.latStr);
  }
  ngOnInit() {
   this._courier.getPackages()
     .subscribe(
       (data) => {
         this.packages = data.packages;
       }
     );
  }
  ngOnChanges() {
  }

}

//this.long = data.results[0].geometry.location.lng;
// this.lat = data.results[0].geometry.location.lat;

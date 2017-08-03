import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  @Input() latitude;
  @Input() longitude;

  lat: number = this.latitude;
  lng: number = this.longitude;

  constructor() { }

  ngOnInit() {
  }

}

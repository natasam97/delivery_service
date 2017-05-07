import { Component, OnInit } from '@angular/core';
import {CourierService} from "../../services/courier.service";

@Component({
  selector: 'app-courier-form',
  templateUrl: './courier-form.component.html',
  styleUrls: ['./courier-form.component.css']
})
export class CourierFormComponent implements OnInit {

  constructor(
    private _courier: CourierService
  ) { }

  ngOnInit() {
    this._courier.getPackages();
  }

}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SenderService } from '../../services/sender.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sender-form',
  templateUrl: './sender-form.component.html',
  styleUrls: ['./sender-form.component.css']
})
export class SenderFormComponent {

  constructor(
    private _sender: SenderService,
    private _router: Router
  ) { }

  sender(form: NgForm) {
    let name: string = form.value.name;
    let street: string = form.value.street;
    let msg: string = form.value.message;

    console.log(name, street, msg);

    this._sender.sendPackage(name, street, msg)
      .subscribe(
        (data) => {
          console.log(data);
        }
      );
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SenderService } from '../../services/sender.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sender-form',
  templateUrl: './sender-form.component.html',
  styleUrls: ['./sender-form.component.css']
})
export class SenderFormComponent implements OnInit {

  constructor(
    private _sender: SenderService,
    private _router: Router
  ) { }

  sender(form: NgForm) {
    let name = form.value.name;
    let street = form.value.street;
    let msg = form.value.message;

    this._sender.sendPackage(name, street, msg)
      .subscribe(
        data => {
          if(data.json()) {
            this._router.navigate(['/']);
          }
          else {
            this._router.navigate(['/register']);
          }
        }
      );
  }

  ngOnInit
}

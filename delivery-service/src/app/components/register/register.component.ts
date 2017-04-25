import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../user/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  roles: Array<string> = ['Role...', 'Courier', 'Sender'];

  constructor(
    private _auth: AuthService,
    private _router: Router
  ) { }

  register(form: NgForm) {
    this._auth.userRegister(form.value.email, form.value.password, form.value.role)
      .subscribe(
        res => {
          if (res === true) {
            this._router.navigate(['/login']);
          } else {
            this._router.navigate(['/register']);
          }
        }
      );
  }

  loginSwitch() {
    this._router.navigate(['/login']);
  }
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../user/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _router: Router,
    private _auth: AuthService
  ) { }

  registerSwitch() {
    this._router.navigate(['/register']);
  }

  login(form: NgForm) {
    this._auth.userLogin(form.value.email, form.value.password)
      .subscribe(
        data => {

          // if true navigate to routes

          if(data === true) {
            this._router.navigate(['/']);
          } else {
            this._router.navigate(['/login']);
          }
        }
      );
  }

  ngOnInit() {
  }

}

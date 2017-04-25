import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  public token: string;
  _headers = new Headers({'Content-Type': 'application/json'});
  _options = new RequestOptions({headers: this._headers, withCredentials: false});
  constructor(
    private _http: Http
  ) { }

  userLogin(email: string, password: string) {

    const url = 'http://localhost:4200/api/login';
    const data = {
      email: email,
      password: password
    };

    return this._http.post(url, JSON.stringify(data), this._options)
      .map((res) => {
        const token = res.json() && res.json().token;

        if(token) {
          this.token = token;

          // Store user
          localStorage.setItem('currentUser', JSON.stringify({ email: email, token: this.token}));

          return true;

        } else {
          return false;
        }

      });
  }

  userRegister(email: string, password: string, role: string) {

    const url = 'http://localhost:4200/api/register';

    const data = {
      email: email,
      password: password,
      role: role
    };

    return this._http.post(url, JSON.stringify(data), this._options)
      .map((res) => {
        const response = res.json();

        if (response.error === false) {
          return true;
        } else {
          return false;
        }

      });
  }

  userLogout() {
    this.token = null;
    localStorage.removeItem('currentUser');
  }

}

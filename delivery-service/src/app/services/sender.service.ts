import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class SenderService {

  url = 'http://localhost:4200/sender';
  headers = new Headers();
  constructor(
    private _http: Http
  ) { }

  sendPackage(name, street, message) {
    let data = {
      name: name,
      street: street,
      msg: message,
    };

    return this._http.post(this.url, JSON.stringify(data), this.headers)
      .map(res => res.json());
  }

}

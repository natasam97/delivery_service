import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class SenderService {

  url = 'http://localhost:4200/api/sender';
  headers = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.headers});
  constructor(
    private _http: Http
  ) { }

  sendPackage(name, street, message) {
    let data = {
      name: name,
      street: street,
      message: message,
    };

    return this._http.post(this.url, JSON.stringify(data), this.options)
      .map(res => res.json());
  }

}

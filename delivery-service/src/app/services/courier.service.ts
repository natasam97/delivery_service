import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class CourierService {

  url = 'http://localhost:4200/api/courier';
  headers = new Headers();
  constructor(
    private _http: Http
  ) { }

  getPackages() {
    return this._http.get(this.url, this.headers)
      .map((res) => res.json())
  }
}

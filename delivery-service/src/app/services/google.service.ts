import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class GoogleService {

  constructor(
    private _http: Http
  ) { }

  getGeo(url) {
    return this._http.get(url)
      .map((res) => res.json());
  }
}

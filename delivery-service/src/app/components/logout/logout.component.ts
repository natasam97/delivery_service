import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
    localStorage.removeItem('currentUser');
    this._router.navigate(['/logout']);
  }

}

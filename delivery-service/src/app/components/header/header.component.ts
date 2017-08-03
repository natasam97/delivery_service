import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../user/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logo = 'Ftn delivery';
  navigation: Array<string> = ['Log out', 'Log in', 'Register', 'Home', 'History'];

  constructor(
    private _auth: AuthService
  ) {}

  isLoggedIn() {
    return this._auth.isLogged();
  }

  ngOnInit() {
  }
}

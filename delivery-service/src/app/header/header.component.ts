import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logo = 'Ftn delivery';
  navigation: Array<string> = ['Log in', 'Register', 'Home'];

  constructor() { }

  ngOnInit() {
  }

}

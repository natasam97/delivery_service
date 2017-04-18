import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  roles: Array<string> = ['Role...', 'Courier', 'Sender'];

  constructor() { }

  OnSubmit() {
    // code
  }
  ngOnInit() {
  }

}

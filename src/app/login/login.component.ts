import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: string = '';
  password: string = '';

  authenticated: boolean = true;
  errMessage: string = 'Invalid credentials. Please try again.';

  conection: boolean = false;
  okMessage: string = 'Welcome to the system';

  constructor() { }

  ngOnInit(): void {
  }

  gestAuth() {
    console.log('UserId:', this.userId);
    console.log('Password:', this.password);

    if (this.userId === 'alby' && this.password === '1234') {
      this.authenticated = true;
      this.conection = true;
    } else {
      this.authenticated = false;
      this.conection = false;
    }
  }


}

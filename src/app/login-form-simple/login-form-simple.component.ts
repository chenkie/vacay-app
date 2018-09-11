import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';

interface User {
  email: String;
  password: String;
}

@Component({
  selector: 'app-login-form-simple',
  templateUrl: './login-form-simple.component.html',
  styleUrls: ['./login-form-simple.component.css']
})
export class LoginFormSimpleComponent implements OnInit {
  public users: Array<User> = [
    {
      email: 'johndoe@gmail.com',
      password: 'secret'
    }
  ];

  constructor(public authService: AuthService) {}

  ngOnInit() {}

  public onSubmit(value: any): void {
    console.log(value);
    this.checkEmailAndPassword(value.email, value.password);
  }

  private checkEmailAndPassword(email: string, password: string): void {
    // Search the users array for and email and password
    // that match what the user supplied
    const loginMatch = this.users.find(
      user => user.email === email && user.password === password
    );
    // If there's no match, alert the user
    // and return false
    if (!loginMatch) {
      alert('Invalid email or password!');
      localStorage.setItem('isAuthenticated', 'false');
      return;
    }
    console.log('Login matched!');
    localStorage.setItem('isAuthenticated', 'true');
    console.log('authed', this.authService.isAuthenticated);
    return;
  }
}

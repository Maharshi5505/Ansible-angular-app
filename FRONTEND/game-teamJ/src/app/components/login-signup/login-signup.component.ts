import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  standalone: true,
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css'],
})
export class LoginSignupComponent {
  constructor(private router: Router) {}

  login() {
    // Simulating successful login
    this.router.navigate(['/home']); // Redirect to home after login
  }

  signup() {
    // Simulating successful signup
    this.router.navigate(['/signup']); // Redirect to home after signup
  }
}

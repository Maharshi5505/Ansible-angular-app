import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  templateUrl: './spalsh-screen.component.html',
  styleUrls: ['./spalsh-screen.component.css'],
})
export class SplashScreenComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/login']); 
    }, 3000);
  }
}

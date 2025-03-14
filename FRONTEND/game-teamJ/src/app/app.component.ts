import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf
import { Router, NavigationEnd, RouterModule } from '@angular/router'; // Import RouterModule for router-outlet
import { HeaderComponent } from './components/header/header.component'; // Import HeaderComponent

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterModule, HeaderComponent], // Add required modules
})
export class AppComponent {
  showHeader: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Show header only on home and other authenticated pages
        this.showHeader = !(event.url === '/' || event.url.startsWith('/login') || event.url.startsWith('/signup'));
      }
    });
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf, CommonModule } from '@angular/common'

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [NgIf, CommonModule],
})
export class HeaderComponent {
  showLogoutModal: boolean = false; // Controls the visibility of the modal

  constructor(private router: Router) {}

  // Navigate to profile page
  profile() {
    this.router.navigate(['/profile']);
  }

  // Open logout confirmation modal
  openLogoutModal() {
    this.showLogoutModal = true;
  }

  // Close the modal without logging out
  closeLogoutModal() {
    this.showLogoutModal = false;
  }

  // Confirm logout and redirect to login page
  confirmLogout() {
    this.showLogoutModal = false;
    this.router.navigate(['/login']); // Redirect to login page
  }
}

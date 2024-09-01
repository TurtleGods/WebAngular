import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge'
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, MatIconModule,MatBadgeModule, MatButtonModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {
  User: string = 'User';
  dropdownOpen: boolean = false;
  notificationsOpen: boolean = false;
  profileSidebarOpen: boolean = false;
  unreadNotifications: number = 3; // Example value, can be dynamically set
  notifications: string[] = ['Notification 1', 'Notification 2', 'Notification 3'];


  selectTitle(title: string) {
    this.User = title;
    this.dropdownOpen = false;
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    if (this.dropdownOpen) {
      this.closeNotifications(); // Close other open elements
      this.closeProfileSidebar();
    }
  }

  toggleNotifications() {
    this.notificationsOpen = !this.notificationsOpen;
    if (this.notificationsOpen) {
      this.unreadNotifications = 0; // Reset unread notifications count when opened
      this.closeDropdown(); // Close other open elements
      this.closeProfileSidebar();
    }  }

  toggleProfileSidebar() {
    this.profileSidebarOpen = !this.profileSidebarOpen;
    if (this.profileSidebarOpen) {
      this.closeDropdown(); // Close other open elements
      this.closeNotifications();
    }  }
      // Close dropdown if open
  closeDropdown() {
    this.dropdownOpen = false;
  }

  // Close notifications if open
  closeNotifications() {
    this.notificationsOpen = false;
  }

  // Close profile sidebar if open
  closeProfileSidebar() {
    this.profileSidebarOpen = false;
  }
    // Listen for clicks on the document
    @HostListener('document:click', ['$event'])
    onClickOutside(event: MouseEvent) {
      const targetElement = event.target as HTMLElement;
  
      // Check if the click was inside the dropdown or profile sidebar; if not, close them
      if (!targetElement.closest('.left-section') && this.dropdownOpen) {
        this.closeDropdown();
      }
  
      if (!targetElement.closest('.right-section') && (this.notificationsOpen || this.profileSidebarOpen)) {
        this.closeNotifications();
        this.closeProfileSidebar();
      }
    }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge'
@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, MatIconModule,MatBadgeModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {
  selectedTitle: string = 'HappyGym';
  dropdownOpen: boolean = false;

  selectTitle(title: string) {
    this.selectedTitle = title;
    this.dropdownOpen = false;
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}

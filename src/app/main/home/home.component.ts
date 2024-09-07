import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule,FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  searchQuery: string = '';

  search(): void {
    // Implement search logic here
    console.log('Search query:', this.searchQuery);
  }
  coaches = [
    { name: 'Coach A', expertise: 'Gym Training', evaluation: '★★★★☆', photo: '/assets/images/john.jpeg' },
    { name: 'Coach B', expertise: 'Cardio', evaluation: '★★★★★', photo: '/assets/images/john.jpeg' },
    { name: 'Coach C', expertise: 'Yoga', evaluation: '★★★☆☆', photo: '/assets/images/john.jpeg' },
    { name: 'Coach D', expertise: 'Pilates', evaluation: '★★★★☆', photo: '/assets/images/john.jpeg' },
    { name: 'Coach E', expertise: 'CrossFit', evaluation: '★★★★☆', photo: '/assets/images/john.jpeg' },
    // Add more coaches as needed
  ];

  visibleCoaches: { name: string; expertise: string; evaluation: string; photo: string; }[] | undefined;
  currentIndex = 0;

  constructor() {
    this.updateVisibleCoaches();
  }

  updateVisibleCoaches() {
    const numVisible = window.innerWidth < 768 ? 2 : 3; // Show 2 cards on mobile, 3 on desktop
    this.visibleCoaches = this.coaches.slice(this.currentIndex, this.currentIndex + numVisible);
  }

  next() {
    const numVisible = window.innerWidth < 768 ? 2 : 3;
    if (this.currentIndex + numVisible < this.coaches.length) {
      this.currentIndex += numVisible;
      this.updateVisibleCoaches();
    }
  }

  prev() {
    const numVisible = window.innerWidth < 768 ? 2 : 3;
    if (this.currentIndex - numVisible >= 0) {
      this.currentIndex -= numVisible;
      this.updateVisibleCoaches();
    }
  }
}

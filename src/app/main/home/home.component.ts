import { CommonModule } from '@angular/common';
import { Component, Pipe } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { SafeUrlPipe } from '../../pipe/safe-url.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule,FormsModule,CommonModule,SafeUrlPipe],
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

  visibleVideos: any;
  visibleCoaches: { name: string; expertise: string; evaluation: string; photo: string; }[] | undefined;
  coachIndex = 0;
  groupIndex = 0;
  videoIndex=0;

  constructor() {
    this.updateVisibleVideos();
    this.updateCoaches();
  }



  nextCoaches() {
    const numVisible = window.innerWidth < 768 ? 2 : 3;
    if (this.coachIndex + numVisible < this.coaches.length) {
      this.coachIndex += numVisible;
      this.updateCoaches();
    }
  }

  prevCoaches() {
    const numVisible = window.innerWidth < 768 ? 2 : 3;
    if (this.coachIndex - numVisible >= 0) {
      this.coachIndex -= numVisible;
      this.updateCoaches();
    }
  }

  updateCoaches(){
    this.visibleCoaches = this.coaches.slice(this.coachIndex,this.coachIndex+this.itemsPerPage);
    console.log(this.visibleVideos);
  }

  videos = [
    { url: 'https://www.youtube.com/embed/JE8IU9qca0Q?si=zCknxlXfTamoRtbN', title: 'Video 1', description: 'Description of Video 1' },
    { url: 'https://www.youtube.com/embed/ywjFPoU0OVQ?si=p00wELfvHcPAEp62', title: 'Video 2', description: 'Description of Video 2' },
    { url: 'https://www.youtube.com/embed/ywjFPoU0OVQ?si=p00wELfvHcPAEp62', title: 'Video 3', description: 'Description of Video 3' },
    { url: 'https://www.youtube.com/embed/ywjFPoU0OVQ?si=p00wELfvHcPAEp62', title: 'Video 4', description: 'Description of Video 4' },
    // Add more video objects as needed
  ];
  itemsPerPage = window.innerWidth <= 768 ? 2 : 3;
  updateVisibleVideos() {
    this.visibleVideos = this.videos.slice(this.videoIndex, this.videoIndex + this.itemsPerPage);
  }
  nextVideo(){
    const numVisible = window.innerWidth < 768 ? 2 : 3;
    if (this.videoIndex + numVisible < this.videos.length) {
      this.videoIndex += numVisible;
      this.updateVisibleVideos();
    }
  }
  preVideo(){
    const numVisible = window.innerWidth < 768 ? 2 : 3;
    if (this.videoIndex - numVisible >= 0) {
      this.videoIndex -= numVisible;
      this.updateVisibleVideos();
    }
  }
}

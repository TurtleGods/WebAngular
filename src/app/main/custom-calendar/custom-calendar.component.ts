import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-calendar',
  standalone: true,
  imports: [CommonModule],  // Import CommonModule for ngFor and other common directives
  templateUrl: './custom-calendar.component.html',
  styleUrls: ['./custom-calendar.component.css']
})
export class CustomCalendarComponent {
  dates: number[] = [];

  ngOnInit(): void {
    this.generateDates();
  }

  generateDates(): void {
    const totalDays = 35; // 7x5 grid
    for (let i = 1; i <= totalDays; i++) {
      this.dates.push(i);
    }
  }
}

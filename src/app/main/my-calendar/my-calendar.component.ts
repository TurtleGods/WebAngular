import { Component, OnInit } from '@angular/core';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, isSameDay } from 'date-fns';
import { CalendarDate, CalendarEvent } from './interface/calendar-date.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-my-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-calendar.component.html',
  styleUrl: './my-calendar.component.css'
})
export class MyCalendarComponent implements OnInit{
  monthYear!: string;
  calendarDates: CalendarDate[] = [];
  daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  currentMonth: Date = new Date();

  ngOnInit() {
    this.updateCalendar();
  }

  updateCalendar() {
    this.monthYear = format(this.currentMonth, 'MMMM yyyy');
    const start = startOfWeek(startOfMonth(this.currentMonth));
    const end = endOfWeek(endOfMonth(this.currentMonth));

    this.calendarDates = eachDayOfInterval({ start, end }).map((date) => {
      return {
        day: date.getDate(),
        isToday: isSameDay(date, new Date()),
        events: [] as CalendarEvent[]
      };
    });
  }

  previousMonth() {
    this.currentMonth = subMonths(this.currentMonth, 1);
    this.updateCalendar();
  }

  nextMonth() {
    this.currentMonth = addMonths(this.currentMonth, 1);
    this.updateCalendar();
  }

  editSchedule(date: CalendarDate) {
    const eventTitle = prompt('Enter the event title:');
    if (eventTitle) {
      const eventTime = prompt('Enter the event time (e.g., 10:00 AM):');
      if (eventTime) {
        const newEvent: CalendarEvent = {
          title: eventTitle,
          time: eventTime
        };
        date.events.push(newEvent);
      }
    }
  }
}

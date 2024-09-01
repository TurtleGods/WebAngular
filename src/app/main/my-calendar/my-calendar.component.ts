import { Component, OnInit } from '@angular/core';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, isSameDay, startOfDay, endOfDay, eachHourOfInterval, addWeeks, subWeeks } from 'date-fns';
import { CalendarDate, CalendarEvent, HourlySlot } from './interface/calendar-date.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-my-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-calendar.component.html',
  styleUrl: './my-calendar.component.css'
})
export class MyCalendarComponent implements OnInit {
  monthYear!: string;
  calendarDates: CalendarDate[] = [];
  daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  currentDate: Date = new Date();
  viewMode: 'day' | 'week' | 'month' = 'month';  // Default to month view

  ngOnInit() {
    this.updateCalendar();
  }

  updateCalendar() {
    this.monthYear = format(this.currentDate, 'MMMM yyyy');

    if (this.viewMode === 'month') {
      this.updateMonthView();
    } else if (this.viewMode === 'week') {
      this.updateWeekView();
    } else if (this.viewMode === 'day') {
      this.updateDayView();
    }
  }

  updateMonthView() {
    const start = startOfWeek(startOfMonth(this.currentDate));
    const end = endOfWeek(endOfMonth(this.currentDate));

    this.calendarDates = eachDayOfInterval({ start, end }).map((date) => {
      return {
        day: date.getDate(),
        isToday: isSameDay(date, new Date()),
        events: [] as CalendarEvent[]
      };
    });
  }

  updateWeekView() {
    const start = startOfWeek(this.currentDate);
    const end = endOfWeek(this.currentDate);

    this.calendarDates = eachDayOfInterval({ start, end }).map((date) => {
      return {
        day: date.getDate(),
        isToday: isSameDay(date, new Date()),
        hours: this.generateHourlySchedule(date),
        events: [] as CalendarEvent[]
      };
    });
  }

  updateDayView() {
    const today = new Date();

    this.calendarDates = [{
      day: today.getDate(),
      isToday: true,
      hours: this.generateHourlySchedule(today),
      events: [] as CalendarEvent[]
    }];
  }

  generateHourlySchedule(date: Date): HourlySlot[] {
    const start = startOfDay(date);
    const end = endOfDay(date);
    return eachHourOfInterval({ start, end }).map(hour => ({
      time: format(hour, 'HH:mm'),
      events: [] as CalendarEvent[]
    }));
  }

  setView(view: 'day' | 'week' | 'month') {
    this.viewMode = view;
    this.updateCalendar();
  }

  previous() {
    if (this.viewMode === 'month') {
      this.currentDate = subMonths(this.currentDate, 1);
    } else if (this.viewMode === 'week') {
      this.currentDate = subWeeks(this.currentDate, 1);
    } else if (this.viewMode === 'day') {
      this.currentDate = subWeeks(this.currentDate, 1); // Adjust as needed
    }
    this.updateCalendar();
  }

  next() {
    if (this.viewMode === 'month') {
      this.currentDate = addMonths(this.currentDate, 1);
    } else if (this.viewMode === 'week') {
      this.currentDate = addWeeks(this.currentDate, 1);
    } else if (this.viewMode === 'day') {
      this.currentDate = addWeeks(this.currentDate, 1); // Adjust as needed
    }
    this.updateCalendar();
  }

  editSchedule(date: CalendarDate, hour: string) {
    const eventTitle = prompt('Enter the event title:');
    if (eventTitle) {
      const eventTime = prompt('Enter the event time (e.g., 10:00 AM):');
      if (eventTime) {
        const newEvent: CalendarEvent = {
          title: eventTitle,
          time: eventTime
        };
        const targetHour = date.hours?.find(h => h.time === hour);
        if (targetHour) {
          targetHour.events.push(newEvent);
        }
      }
    }
  }
}

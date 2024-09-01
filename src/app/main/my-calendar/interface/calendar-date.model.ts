export interface CalendarDate {
  day: number;
  isToday: boolean;
  hours?: HourlySlot[];  // Optional, used for day and week views
  events?: CalendarEvent[];  // Optional, used for month view
}

export interface CalendarEvent {
  title: string;
  time: string;  // e.g., '10:00 AM'
}

export interface HourlySlot {
  time: string;  // Hour of the day (e.g., '10:00')
  events: CalendarEvent[];
}

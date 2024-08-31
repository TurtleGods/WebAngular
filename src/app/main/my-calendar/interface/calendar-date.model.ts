export interface CalendarDate {
  day: number;         // The day of the month (e.g., 1, 2, 3, ..., 31)
  isToday: boolean;    // A boolean indicating whether this date is the current day
  events: CalendarEvent[];    // An array of event descriptions associated with this date
}

export interface CalendarEvent {
  title: string;
  time: string;  // e.g., '10:00 AM'
}

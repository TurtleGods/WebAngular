export interface CalendarDate {
  day: number;         // The day of the month (e.g., 1, 2, 3, ..., 31)
  isToday: boolean;    // A boolean indicating whether this date is the current day
  events: string[];    // An array of event descriptions associated with this date
}

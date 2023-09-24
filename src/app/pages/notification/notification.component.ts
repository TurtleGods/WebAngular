import { Component } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  private socket$ = webSocket('ws://localhost:7271/ws'); // Replace with your WebSocket server URL

  constructor() {
    this.socket$.subscribe((message) => {
      if (message === 'processing-finished') {
        // Handle processing finished event, e.g., show a notification to the user
      }
    });
  }
}

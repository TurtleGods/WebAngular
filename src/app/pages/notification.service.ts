import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private hubConnection: HubConnection | undefined;
  private notificationSubject = new Subject<string>();

  constructor() {
    this.initializeConnection();
  }

  private initializeConnection() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl('/hub/notification') // Replace with your SignalR hub URL
      .build();

    this.hubConnection.start().then(() => {
      console.log('SignalR connection started');
    });

    this.hubConnection.on('ReceiveNotification', (message: string) => {
      // Handle incoming notifications, e.g., display them to the user
      this.notificationSubject.next(message);
    });
  }

  getNotifications() {
    return this.notificationSubject.asObservable();
  }
}

import { Component } from '@angular/core';
import { FooterComponent } from "./footer/footer.component";
import { MyCalendarComponent } from "./my-calendar/my-calendar.component";
import { TopbarComponent } from "./topbar/topbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FooterComponent, MyCalendarComponent, TopbarComponent, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}

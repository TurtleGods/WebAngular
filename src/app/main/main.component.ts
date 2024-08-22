import { Component } from '@angular/core';
import { FooterComponent } from "./footer/footer.component";
import { CustomCalendarComponent } from './custom-calendar/custom-calendar.component';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FooterComponent,CustomCalendarComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}

import { Component } from '@angular/core';
import { FooterComponent } from "./footer/footer.component";
import { CustomCalendarComponent } from './custom-calendar/custom-calendar.component';
import { TopbarComponent } from './topbar/topbar.component';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FooterComponent,CustomCalendarComponent,TopbarComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}

import { Component } from '@angular/core';
import { HolidayService } from './holidays/holiday.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HolidayService]
})
export class AppComponent {
  title: string = 'List of Holidays';
}

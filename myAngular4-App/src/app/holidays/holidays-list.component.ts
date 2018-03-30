import { Component, OnInit } from '@angular/core';
import { IHoliday } from './holiday';
import { HolidayService } from './holiday.service';

@Component({
    // selector: 'pm-holidays',
    templateUrl: './holidays-list.component.html',
    styleUrls: ['./holidays-list.component.css']
})
export class HolidayListComponent implements OnInit {
   holidaysdata: IHoliday[] = [];
   errorMessage: string;
  constructor(private _holidayService: HolidayService) {
    // this.holidays = this._holidayService.getHolidays(); /*not api service */
  }
  ngOnInit(): void {
    this._holidayService.getHolidays()
         .subscribe(
             response => {this.holidaysdata = response.holidays; 
              console.log(this.holidaysdata)},
             error => this.errorMessage = <any>error);
  }
}
   
import { Component, OnInit } from '@angular/core';
import { IHoliday } from './holiday';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-holiday-detail',
  templateUrl: './holiday-detail.component.html',
  styleUrls: ['./holiday-detail.component.css']
})
export class HolidayDetailComponent implements OnInit {
  heading: string = "Holiday Detail";
  holidaysdata: IHoliday;

  constructor(private _route: ActivatedRoute,
  private _router: Router) { }

  ngOnInit() {
    let name = this._route.snapshot.paramMap.get('name');
    this.heading += `: ${name} `; 
    this.holidaysdata = {
      "name": "Memorial day",
      "date": "2015-03-03",
      "observed": "2015-07-03",
      "public": false 
    }
  }

}

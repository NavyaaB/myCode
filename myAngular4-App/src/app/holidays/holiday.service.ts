import { Injectable } from '@angular/core';
import { IHoliday } from './holiday';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class HolidayService {
    private _holidayUrl = 'https://holidayapi.com/v1/holidays?country=US&key=0dc43689-e7dc-4281-a83d-eadfcd4cc0be&year=2015&month=09';
    // private _holidayUrl = './api/holidays/holidays.json';

   data: any  = {};
    constructor(private _http: HttpClient) {
        console.log('ooooooooooooooooo');
        console.log(this._holidayUrl);
    } 
    private handleError(err: HttpErrorResponse) {
        let errorMessage='';
        console.log(err.message);
        return Observable.throw(err.message);
    } 
    getHolidays(): Observable<any> {
        return this._http.get<any>(this._holidayUrl)
                    .do(data => console.log('-------------' + JSON.stringify(data)))
                    .catch(this.handleError);
    }
}
   

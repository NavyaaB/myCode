import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HolidayListComponent } from './holidays/holidays-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HolidayDetailComponent } from './holidays/holiday-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HolidayListComponent,
    HolidayDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'holidays/:name', component: HolidayDetailComponent },
      { path: 'home', component: HolidayListComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

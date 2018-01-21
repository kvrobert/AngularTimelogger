import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MonthStatisticsComponent } from './month-statistics/month-statistics.component';
import { DayStatisticsComponent } from './day-statistics/day-statistics.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DinamicCalendarComponent } from './dinamic-calendar/dinamic-calendar.component';
import { DisplaysMonthComponent } from './displays-month/displays-month.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MonthStatisticsComponent,
    DayStatisticsComponent,
    CalendarComponent,
    DinamicCalendarComponent,
    DisplaysMonthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

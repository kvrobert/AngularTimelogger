import { Component, OnInit } from '@angular/core';
import {WorkDay} from "../Entity/work-day";

@Component({
  selector: 'app-displays-days',
  templateUrl: './displays-days.component.html',
  styleUrls: ['./displays-days.component.css']
})
export class DisplaysDaysComponent implements OnInit {

  private workDayTableHeader: string[] = ['Year', 'Month', 'Day', 'Edit', 'Delete'];
  workDays: WorkDay[] = [
    {year: 2017, month: 10, day: 11, requiredHour: 450},
    {year: 2017, month: 10, day: 12, requiredHour: 450},
    {year: 2017, month: 10, day: 13, requiredHour: 450},
  ];

  constructor() { }

  ngOnInit() {
  }

}

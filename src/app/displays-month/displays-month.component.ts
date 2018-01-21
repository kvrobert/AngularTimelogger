import { Component, OnInit } from '@angular/core';
import {WorkMonth} from '../Entity/work-month';

@Component({
  selector: 'app-displays-month',
  templateUrl: './displays-month.component.html',
  styleUrls: ['./displays-month.component.css']
})
export class DisplaysMonthComponent implements OnInit {

  private tableHeader: string[] = ['Year', 'Month', 'Edit', 'Delete'];

  workMonths: WorkMonth[] = [
    {year: 2017, month: 10},
    {year: 2017, month: 10},
    {year: 2017, month: 10},
  ];


  constructor() { }

  ngOnInit() {
  }

}

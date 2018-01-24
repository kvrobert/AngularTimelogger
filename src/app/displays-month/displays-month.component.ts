import { Component, OnInit } from '@angular/core';
import {WorkMonth} from '../Entity/work-month';
import {TimeloggerService} from "../timelogger.service";

@Component({
  selector: 'app-displays-month',
  templateUrl: './displays-month.component.html',
  styleUrls: ['./displays-month.component.css']
})
export class DisplaysMonthComponent implements OnInit {

  private tableHeader: string[] = ['Year', 'Month', 'Edit', 'Delete'];

  workMonths: WorkMonth[];

  constructor(private timeloggerService: TimeloggerService) { }

  ngOnInit() {
    this.getWorkMonths();
  }

  getWorkMonths(): void {
   this.timeloggerService.getWorkMonths()
     .subscribe( months => this.workMonths = months );
  }
}

import { Injectable } from '@angular/core';
import {WorkMonth} from "./Entity/work-month";
import {WorkDay} from "./Entity/work-day";
import  { Task } from  './Entity/task'
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

@Injectable()
export class TimeloggerService {

  workMonths: WorkMonth[] = [
    {year: 2017, month: 10},
    {year: 2017, month: 11},
    {year: 2017, month: 12},
    {year: 2017, month: 9},
  ];

  workDays: WorkDay[] = [
    {year: 2017, month: 10, day: 11, requiredHour: 450},
    {year: 2017, month: 10, day: 12, requiredHour: 450},
    {year: 2017, month: 10, day: 13, requiredHour: 450},
    {year: 2017, month: 10, day: 14, requiredHour: 450},
    {year: 2017, month: 10, day: 15, requiredHour: 450},
    {year: 2017, month: 10, day: 16, requiredHour: 450},
    {year: 2017, month: 10, day: 17, requiredHour: 450},
    {year: 2017, month: 10, day: 18, requiredHour: 450},
  ];

  tasks: Task[] = [
    { year: 2017, month: 10, day: 11, taskId: 'LT-4545', comment: 'Valami kommentelés', startTime: '10:15', endTime: '11:45'},
    { year: 2017, month: 10, day: 11, taskId: 'LT-4545', comment: 'Valami kommentelés', startTime: '10:15', endTime: '11:45'},
    { year: 2017, month: 10, day: 11, taskId: 'LT-4545', comment: 'Valami kommentelés', startTime: '10:15', endTime: '11:45'},
    { year: 2017, month: 10, day: 11, taskId: 'LT-4545', comment: 'Valami kommentelés', startTime: '10:15', endTime: '11:45'},
    { year: 2017, month: 10, day: 11, taskId: 'LT-4545', comment: 'Valami kommentelés', startTime: '10:15', endTime: '11:45'},
    { year: 2017, month: 10, day: 11, taskId: 'LT-4545', comment: 'Valami kommentelés', startTime: '10:15', endTime: '11:45'},
    { year: 2017, month: 10, day: 11, taskId: 'LT-4545', comment: 'Valami kommentelés', startTime: '10:15', endTime: '11:45'},
    { year: 2017, month: 10, day: 11, taskId: 'LT-4545', comment: 'Valami kommentelés', startTime: '10:15', endTime: '11:45'},
    { year: 2017, month: 10, day: 11, taskId: 'LT-4545', comment: 'Valami kommentelés', startTime: '10:15', endTime: '11:45'},
    { year: 2017, month: 10, day: 11, taskId: 'LT-4545', comment: 'Valami kommentelés', startTime: '10:15', endTime: '11:45'},
    { year: 2017, month: 10, day: 11, taskId: 'LT-4545', comment: 'Valami kommentelés', startTime: '10:15', endTime: '11:45'}

  ];

  constructor() { }


  getWorkMonths(): Observable< WorkMonth[] > {
    return of( this.workMonths );
  }

  getWorkDays(): WorkDay[] {
    return this.workDays;
  }

  getTasks(): Task[] {
    return this.tasks;
  }
}
